"use client"
import { signinDashboard } from "../api/signin-dashboard";
import { useState } from "react";
import Image from "next/image";
export default function SignIn() {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
    return (
      <div className="h-full flex justify-center items-center">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8 bg-[#f9f9f9]">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
              Login in to your DashBoard
            </h2>
          </div>

          <div className="flex justify-center sm:justify-center gap-5 mt-4">
        <Image 
        src="/dashboard.svg"
        alt="My Image"
        width={200}
        height={100}
        />

          </div>

<span className="text-center mt-4 text-gray-500">or</span>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" method="POST" onSubmit={(e)=>{
              e.preventDefault();
              signinDashboard(email,password)
            }}>
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                  Email address
                </label>
                <div className="mt-2">
                <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    onChange={(e)=>{
                      setEmail(e.target.value);
                    }}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                  />
                </div>
              </div>
  
              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">
                    Password
                  </label>
                  <div className="text-sm">
                    <a href="#" className="font-semibold text-gray-800 hover:text-gray-700">
                      Forgot password?
                    </a>
                  </div>
                </div>
                <div className="mt-2">
                <input
                    id="password"
                    name="password"
                    type="password"
                    autoComplete="password"
                    required
                    onChange={(e)=>{
                      setPassword(e.target.value);
                    }}
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                  />
                </div>
              </div>
  
              <div>
                <button
                  type="submit"
                  className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Open your Dashboard
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }