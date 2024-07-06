"use client"

import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react"

export const SignupComponent = ()=>{
    const navigate = useRouter();
    const [username,setUsername]=useState("");
    const [password,setPassword]=useState("");
    return (
        <div className="flex flex-col items-center justify-center  min-h-[70vh] max-h[100vh] w-full">
            <div className=" bg-slate-100 rounded-md flex flex-col gap-3 h-[40%] justify-evenly px-5">
                <div className="text-3xl font-extrabold flex justify-center">SignUp</div>
                <label htmlFor="username" className=" font-bold">Username</label>
                <input type="text" id="username" className="w-full bg-white  border border-black rounded-md" placeholder="Username" onChange={function (e){setUsername(e.target.value)}}/>
                <label htmlFor="password" className=" font-bold">Password</label>
                <input type="password" id="password" className="w-full bg-white border border-black rounded-md " placeholder="Password" onChange={function (e){setPassword(e.target.value)}}/>
                <button className=" py-1  bg-black text-slate-100 rounded-md" onClick={function (){
                    console.log("Username : ",username," password : ",password);
                    axios.post("http://localhost:3000/api/user",{
                        username,
                        password
                    })
                    navigate.push("/");
                }}>Submit</button>
            </div>
        </div>
    )
}