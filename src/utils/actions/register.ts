"use server"

import { UserData } from "@/app/register/page"

export const registerUser = async(data: UserData)=>{
    const res = await fetch(`${process.env.BACKEND_URL}/register`, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json"
        },
        cache: "no-store",
        body: JSON.stringify(data)
    })
    const userInfo = await res.json()
    return userInfo
}