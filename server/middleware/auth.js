const jwt = require('jsonwebtoken');

async function authUser(req,res,next){
    const token = req.headers['x-access-token']
    if(!token){
        return res.status(404).send("token not found")
    }

    try {
        const bearerToken = token.split(" ")[1]
        const decode = await jwt.verify(bearerToken, process.env.JWT);
        req.user = decode
    } catch (error) {
        return res.status(500).send('token invalid')
    }

    next();
}

module.exports = authUser