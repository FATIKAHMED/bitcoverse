import React from 'react'
import Img1 from "../../assets/icon1.png";
import Img2 from "../../assets/icon2.png";
import Img3 from "../../assets/icon3.png";


function Login() {
  return (
    <div className='container mx-auto'>
        <div className="pt-16  bg-red- text-center text-[#143d59] pb-20 text-6xl font-bold">
            <span className='text-[#efb21a]'>Login</span> Page
        </div>
        <div className='text-[#143d59] text-3xl font-bold text-center mt-7 mb-7'>Log in to your BITCOVERSE Account</div>
        <div className='flex sm:flex-row flex-col justify-center items-center gap-5'>
          <h1 className='text-[#efb21a] font-bold text-base'>Continue with Social Media : </h1>
          <div className='flex gap-5'>
            <img className='w-7' src={Img1} alt=""/>
            <img className='w-7' src={Img2} alt=""/>
            <img className='w-7' src={Img3} alt=""/>
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
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="#7e7e7e">
            <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
            <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
        </svg>
        }
        />
        <div className='max-w-md mx-auto mt-5'>
          <button className="mx-auto rounded-3xl pt-2 pb-2 w-full bg-[#143d59] font-bold text-white text-lg">Log In</button>
        </div>
        <div className='max-w-md mx-auto mt-5 mb-10'>
          <div className='text[#143d59] text-xs font-bold flex sm:flex-row flex-col pl-5 pr-5 items-center justify-between'>
            <span className='text-[#143d59]  cursor-pointer'>
              Forgot Password?
            </span>
            <span className='text-[#143d59] cursor-pointer'>
              <a className='text-zinc-700 mr-1 text-[12px] font-normal cursor-pointer'>Don't have an account?</a>
              Sign Up Now
            </span>
          </div>
        </div>
    </div>
  )
}

function Input({leftSvg, rightSvg, type}){
  return (
    <div className='mx-auto rounded-3xl p-1 max-w-md mt-5 border-[1px] flex justify-between items-center gap-5 border-[#7e7e7e]'>
      <div className='h-10 w-10 rounded-full bg-[#efb21a] flex items-center justify-center'>
        {leftSvg}
      </div>
      <input type="text"  className="flex-grow w-16  outline-none border-none"/>
      <div className='flex items-center justify-center'>
      {rightSvg && <span className="mr-3">{rightSvg}</span>}
      </div>
    </div>
  )
}

export default Login