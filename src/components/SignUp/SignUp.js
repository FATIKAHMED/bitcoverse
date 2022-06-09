import React from "react";
import ReCAPTCHA from 'react-google-recaptcha'

function SignUp() {
  function onChange(value) {
    console.log('Captcha value:', value);
  }
 
  return (
    <div>
      <div className="pt-16 pb-16 bg-red- text-center text-[#143d59] text-6xl font-bold">
        <span className="text-[#efb21a]">Sign</span> Up
      </div>
      <h1 className="pt-16 pb-16 bg-red- text-center text-[#143d59] text-4xl font-bold">
        Sign Up & Start Learning
      </h1>

      <div>
        <Input
          type="email"
          leftSvg={
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
              stroke-width="2"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
              />
            </svg>
          }
        />

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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
          }
          rightSvg={
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
              <path fill-rule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clip-rule="evenodd" />
          </svg>
          }
        />
      </div>
      <div className=" flex items-center justify-center">
    <ReCAPTCHA
        sitekey="YOUR-SITE-KEY"
        onChange={onChange}
      />
    </div>
    <div className=" flex items-center justify-center p-2">
      <input type="checkbox"/> <p className="text-xs pl-2">Send me special offers, personalized recommendations and learning tips</p>
    </div>
    <div className="flex items-center justify-center">
    <button className="bg-[#143d59] p-2 mt-2 mb-2 text-white w-[33%] rounded-2xl">
                Sign Up
              </button>
              </div>
              <div className=" flex items-center justify-center p-2">
      <input type="checkbox"/> <p className="text-xs pl-2">Send me special offers, personalized recommendations and learning tips</p>
    </div>
    <div className=" flex items-center justify-center p-2">
      <p className="text-xs">Already have an Account? <a>Log in</a></p>
    </div>
    </div>
  );
}
function Input({ leftSvg, rightSvg, type }) {
  
  return (
  
    <div className='mx-auto rounded-3xl p-1 max-w-md mt-5 border-2 flex gap-5 border-slate-900'>
    <div className='h-10 w-10 rounded-full bg-[#efb21a] flex items-center justify-center'>
      {leftSvg}
    </div>
    <input type={type} className="flex-grow outline-none border-"/>
    <div className='flex items-center justify-center'>
      {rightSvg}
    </div>
    
  </div>
  );
}
export default SignUp;
