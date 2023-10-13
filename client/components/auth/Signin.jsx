'use client';

import { userData } from "@components/context/userContext";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useContext, useEffect, useState } from "react";

const Signin = () => {
    const { user } = useContext(userData)
    const router = useRouter()
    const [ email, setEmail ] = useState('');
    const [ pass, setPass ] = useState('');
    const [ msg, setMsg ] = useState(null);
    const handleSignin = async(e) => {
        e.preventDefault();
        try {
            const getToken = await fetch('http://localhost:4000/signin',{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    email: email,
                    password: pass,
                })
            })
            if(getToken.ok){
                window.location.reload(false)
                const token = await getToken.json()
                localStorage.setItem("x-access-token",token.token)
            }else{
                const res = await getToken.json()
                setMsg(res)
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        if(user?.userId){
            router.push('/')
        }
    },[user])
  return (
    <div className="grid place-content-center items-center h-full">
        <div className="shadow-lg p-5 rounded-lg">
            <form className="grid" onSubmit={handleSignin}>
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
                    disabled={email.length === 0 || pass.length === 0 ? true : false}
                    className="py-3 bg-green-100 text-green-600 rounded-lg font-semibold hover:bg-green-600 hover:text-green-100 duration-300"
                >
                    Sign In
                </button>
            </form>
            <div className="mt-2">
                <span>don't have a account </span>
                <Link href='/auth/signup' className="underline text-blue-600">signup</Link>
            </div>
        </div>
        {msg&&(
            <div className="py-2 my-3 bg-red-100 text-red-600 shadow-lg rounded-lg text-center font-semibold ">X {msg}</div>
        )}
    </div>
  )
}

export default Signin