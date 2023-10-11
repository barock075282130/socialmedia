'use client';

import { createContext, useEffect, useState } from "react";

export const userData = createContext({ userId: undefined, email: undefined })

const Context = ({ children }) => {
    const [ user, setUser ] = useState({ userId: undefined, email: undefined })
    const getUser = async() => {
        try {
            const res = await fetch('http://localhost:4000/userdata',{
                method: "GET",
                headers: {
                    "x-access-token": "Bearer " + localStorage.getItem('x-access-token')
                }
            })
            if(res.ok){
                const json = await res.json();
                setUser({ userId: json.userId, email: json.email })
            }
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        getUser(); 
    },[])
  return (
    <userData.Provider value={{ user }}>
        {children}
    </userData.Provider>
  )
}

export default Context