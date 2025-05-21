"use client"

import axios from "axios";
import { useState } from "react";

export default  function Signup() {
    const [username , setUsername] = useState("")
    const [password , setPassword] = useState("")
    return <div className=" flex justify-center items-center h-[90vh]">
        <div className="w-[50%] flex flex-col justify-center items-center">

       
        <input className="w-[35%] px-1 py-1 text-lg m-4 bg-cyan-900 rounded-md" onChange={(e : any)=>{
            setUsername(e.target.value)
        }}  type="text" placeholder="Username"/>
        <input className="w-[35%] px-1 py-1 text-lg m-4 bg-cyan-900 rounded-md" onChange={(e:any)=>{
            setPassword(e.target.value)
        }} type="password" placeholder="password"/>
        <button className="w-[35%] px-1 py-1 text-lg m-4 bg-cyan-300 rounded-md text-cyan-900" onClick={()=>{
            console.log(username)
            console.log(password)
            axios.post("http://localhost:3000/api/v1/signup",{
                username,
                password
            })
        }}>Signup</button>
    </div>
     </div>
    
}