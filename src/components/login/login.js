import React from 'react'
import Img from "../../assets/icon1.png";

function Login() {
  return (
    <div>
        <div className="pt-16 pb-16 bg-red- text-center text-blue-900  text-6xl font-bold">
            <span className='text-amber-300'>Login</span> Page
        </div>
        <div className='text-gray-900 text-2xl font-bold text-center mt-7 mb-7'>Login to your BITCOVERSE Accounts</div>
        <div className='flex sm:flex-row flex-col justify-center items-center gap-5'>
          <h1 className='text-amber-300 font-bold text-xl'>Continue with Social Media : </h1>
          <div className='flex gap-5'>
            <img className='w-7' src={Img} alt=""/>
            <img className='w-7' src={Img} alt=""/>
            <img className='w-7' src={Img} alt=""/>
          </div>
        </div>
        <Input
        type="email"
          leftSvg={
            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" viewBox="0 0 20 20" fill="white">
              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
            </svg>
          }
        />
        <Input 
        type="password"
        leftSvg={
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="white">
            <path fill-rule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clip-rule="evenodd" />
          </svg>
        }
        rightSvg={
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
        </svg>
        }
        />
        <div className='max-w-md mx-auto mt-5'>
          <button className="mx-auto rounded-3xl w-full bg-gray-900 font-bold text-white text-lg">Log In</button>
        </div>
        <div className='max-w-md mx-auto mt-5 mb-10'>
          <div className='text-gray-900 text-sm font-bold flex sm:flex-row flex-col items-center justify-between'>
            <span>
              Forgot Password?
            </span>
            <span>
              <span className='text-zinc-700 mr-1'>Don't have an account?</span>
              Sign Up Now
            </span>
          </div>
        </div>
    </div>
  )
}

function Input({leftSvg, rightSvg, type}){
  return (
    <div className='mx-auto rounded-3xl p-1 max-w-md mt-5 border-2 flex justify-between items-center gap-5 border-slate-900'>
      <div className='h-10 w-10 rounded-full bg-amber-300 flex items-center justify-center'>
        {leftSvg}
      </div>
      <input type="text"  className="flex-grow w-16  outline-none border-none"/>
      <div className='flex items-center justify-center'>
        {rightSvg}
      </div>
    </div>
  )
}

export default Login