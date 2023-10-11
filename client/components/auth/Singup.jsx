'use client';

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Singup = () => {
    const router = useRouter();
    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] = useState('');
    const [ msg, setMsg ] = useState(null);
    const handleRegis = async(e) => {
        e.preventDefault();
        try {
            const sendData = await fetch('http://localhost:4000/register',{
                method: 'POST',
                headers: {
                    "Content-Type":"application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: pass
                })
            })
            if(sendData.ok){
                router.push('/auth/signin')
            }else{
                const res = await sendData.json()
                setMsg(res)
            }
        } catch (error) {
            console.log('err')
        }
    }
    return (
        <div className="grid place-content-center items-center h-full">
        <div className="shadow-lg p-5 rounded-lg">
            <form className="grid" onSubmit={handleRegis}>
                <span className="pl-4 font-semibold">E-mail</span>
                <input type="text" 
                    value={email} 
                    onChange={(e)=> setEmail(e.target.value)}
                    required
                />
                <span className="pl-4 font-semibold">Password</span>
                <input type="password" 
                    value={pass} 
                    onChange={(e)=> setPass(e.target.value)}
                    required
                />
                <button 
                    className="py-3 bg-blue-100 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-blue-100 duration-300"
                >
                    Register
                </button>
            </form>
            <div className="mt-2">
                <span>already has account </span>
                <Link href='/auth/signin' className="underline text-blue-600">signin</Link>
            </div>
        </div>
        {msg&&(
            <div className="py-2 my-3 bg-red-100 text-red-600 shadow-lg rounded-lg text-center font-semibold ">X {msg}</div>
        )}
    </div>
  )
}

export default Singup