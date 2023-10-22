'use client';

import { useEffect, useState } from "react";

const UserProfile = ({ name }) => {
    const [ user, setUser ] = useState(null);
    useEffect(()=>{
        const fetchUser = async() => {
            try {
                const res = await fetch(`http://localhost:4000/acc/user/${name}`,{
                    method: "GET",
                    headers:{
                        "Content-Type":"application/json"
                    }
                })
                const json = await res.json()
                setUser(json)
            } catch (error) {
                console.log(error)
            }
        }
        fetchUser()
    },[name])
  return (
    <div className="w-full">
        {user&&(
            <div>
                <div className="relative">
                    <div className="bg-green-300 w-full h-36"></div>
                    <div className="h-32 w-32 rounded-full bg-black absolute top-16 m-4"></div>
                </div>
                <div className="h-20">
                    <span className="flex pl-40 pt-2 font-semibold text-xl">{user.data.username}</span>
                    <span className="pl-40 text-gray-400">@{user.data.email.split('@')[1]}</span>
                </div>
            </div>
        )}
    </div>
  )
}

export default UserProfile