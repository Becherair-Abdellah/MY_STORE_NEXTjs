'use client'
import React, { useState } from 'react'

const LoginForm = () => {
    const [email,setEmail] = useState();
    const [password,setPassword] = useState();
    const [data,setData] = useState();
    const onSubmit = async ()=>{
        const response = await fetch("/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                "email":email,
                "password":password,
            })
        });
        const data = await response.json();
        setData(data);
        // console.log(data);
    }

  return (
    <form className="space-y-4">
    <div>
      <label className="block  text-yellow mb-5">Email Address</label>
      <input
        type="email"
        className="w-full p-2 dark:bg-dark_primary dark:text-yellow    border-b-2 outline-none font-bold text-xl  focus:border-primary-primary__black"
        placeholder="name@gmail.com"
        onChange={(e)=>{
            setEmail(e.target.value);
        }}
      />
    </div>
    <div>
      <label className="block  text-yellow mb-5">Password</label>
      <input
        type="password"
        className="w-full p-2 dark:bg-dark_primary dark:text-yellow    border-b-2 outline-none font-bold text-xl  focus:border-primary-primary__black"
        placeholder="●●●●●●●●●●"
        onChange={(e)=>{
            setPassword(e.target.value);
        }}
      />
    </div>
    <div className="flex items-center justify-between">

      <a href="#" className="text-sm text-yellow">Forgot Password</a>
    </div>
    <button
      type="submit"
      className="w-full bg-yellow  py-2  rounded"
      onClick={(e)=>{
        // e.preventDefault();
        onSubmit();
      }}
    >
      your {data?.$id}
    </button>
  </form>
  )
}

export default LoginForm
