
"use client"
import { rigister } from "@/api/rigister"
import { useState } from "react";
export default function SignUp() {
  const [dataFile,setFile] = useState('')
    return (
      <div className="h-full flex justify-center items-center">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Create your account
            </h2>
          </div>

          <div className="flex justify-center sm:justify-center gap-5 mt-4">
            <a href="#" className="flex hover:bg-gray-50 justify-center items-center border px-4 sm:px-6 py-4 rounded-lg">
              <img src="https://img.clerk.com/static/apple.svg" className="w-[30px]" alt="" />
            </a>

            <a href="#" className="flex hover:bg-gray-50 justify-center items-center
            border px-4 sm:px-6 py-4 rounded-lg">
              <img src="https://img.clerk.com/static/github.svg" className="w-[30px]" alt="" />
            </a>

            <a href="#" className="flex hover:bg-gray-50 justify-center items-center
            border px-4 sm:px-6 py-4 rounded-lg">
              <img src="https://img.clerk.com/static/google.svg" className="w-[30px]" alt="" />
            </a>

            <a href="#" className="flex hover:bg-gray-50 justify-center items-center
            border px-4 sm:px-6 py-4 rounded-lg">
              <img src="https://img.clerk.com/static/facebook.svg" className="w-[30px]" alt="" />
            </a>

          </div>

<span className="text-center mt-4 text-gray-500">or</span>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" action="https://www.google.com" method="POST">
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
                    className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400"
                  />
                </div>
              </div>
              <div>
                <input type="file" onChange={(e)=>{
                  setFile(e.target.files[0]);
                }}
                accept="image/*" />
                <button
                  type="submit"
                  onClick={(e)=>{
                    e.preventDefault();
                    rigister(dataFile)
                  }}
                  className="flex w-full justify-center rounded-md bg-gray-800 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Sign in
                </button>
              </div>
            </form>
  
            <p className="mt-10 text-center text-sm text-gray-500">
            You already have an account?{' '}
              <a href="/signin" className="font-semibold leading-6 text-gray-800 hover:text-gray-700">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </div>
    )
  }