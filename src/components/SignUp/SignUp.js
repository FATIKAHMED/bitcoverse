import React from "react";

function SignUp() {
  return (
    <div>
      <div className="pt-16 pb-16 bg-red- text-center text-blue-900 bg-red-100 text-6xl font-bold">
        <span className="text-amber-300">Sign</span> Up
      </div>
      <h1 className="pt-16 pb-16 bg-red- text-center text-blue-900 text-4xl font-bold">
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
              stroke="currentColor"
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
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
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
              fill="currentColor"
            >
              <path
                fill-rule="evenodd"
                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                clip-rule="evenodd"
              />
            </svg>
          }
        />
      </div>
    </div>
  );
}
function Input({ leftSvg, rightSvg, type }) {
  return (
    <div>
      <div className="mx-auto rounded-3xl p-1 max-w-md mt-5 border-2 flex gap-5 border-slate-900">
        <div className="h-10 w-10 rounded-full bg-amber-300 flex items-center justify-center">
          {leftSvg}
        </div>
        <input type={type} className="flex-grow outline-none border-none" />
        <div className="flex items-center justify-center">{rightSvg}</div>
      </div>
    </div>
  );
}
export default SignUp;
