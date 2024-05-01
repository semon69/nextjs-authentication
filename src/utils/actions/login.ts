"use server"

import { FormValues } from "@/app/login/page"

export const loginUser = async(data: FormValues)=>{
    const res = await fetch(`${process.env.BACKEND_URL}/login`, {
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