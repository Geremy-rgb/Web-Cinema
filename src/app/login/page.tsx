import PlusJakartaSans from "@/TextFonts/Fonts";
import Link from "next/link";
import React from "react";

function Login() {
  return (
    <div className="flex justify-center w-full h-screen">
      <div className="flex flex-col w-[1280px] h-fit">
        <div className="flex w-full h-full pt-5 pr-6 pb-5 pl-6 gap-1">
          <div className="flex flex-col w-[320px] h-fit">
            <div className="flex w-full h-full p-4">
              <div className="flex w-full h-fit gap-1">
                <img
                  src="/login.png"
                  className="w-72 h-[728px] object-cover rounded-xl"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full h-[760px] max-w-[960px]">
            <div className="flex flex-col w-full h-fit pt-5 pr-4 pb-3 pl-4 items-center">
              <h1
                className={`${PlusJakartaSans} font-bold text-[28px] leading-9 tracking-normal`}
              >
                WELCOME BACK
              </h1>
            </div>

            <div className="flex w-fit h-fit min-w-[480px] max-w-[480px] pt-3 pr-4 pb-3 pl-4 gap-4">
              <div className="flex flex-col w-full h-fit min-w-40">
                <input
                  type="text"
                  placeholder="Email"
                  className="flex w-full h-[56px] rounded-xl p-4 bg-buttoms"
                />
              </div>
            </div>

            <div className="flex w-fit h-fit min-w-[480px] max-w-[480px] pt-3 pr-4 pb-3 pl-4 gap-4">
              <div className="flex flex-col w-full h-fit min-w-40">
                <input
                  type="text"
                  placeholder="Password"
                  className="flex w-full h-[56px] rounded-xl p-4 bg-buttoms"
                />
              </div>
            </div>

            <div className="flex w-full h-fit pt-3 pr-4 pb-3 pl-4">
              <button
                className={`${PlusJakartaSans} font-bold text-[14px] leading-5 tracking-normal flex w-full h-10 min-w-[84px] max-w-[480px] rounded-[20px] pr-4 pl-4 bg-login items-center justify-center`}
              >
                Log In
              </button>
            </div>

            <div className="flex w-full h-fit pt-1 pr-4 pb-3 pl-4 justify-center">
              <p
                className={`${PlusJakartaSans} font-normal text-[14px] leading-5 tracking-normal`}
              >
                {"Don't have an account? Sign up"}
              </p>
            </div>
            <div className="flex w-full h-fit pt-3 pr-4 pb-3 pl-4">
              <Link href="/api/auth/login" className="w-full">
                <button
                  className={`${PlusJakartaSans} font-bold text-[14px] leading-5 tracking-normal flex justify-center items-center w-full h-[40px] min-w-[84px] max-w-[480px] rounded-[20px] pr-4 pl-4 bg-buttoms`}
                >
                  Continue with Auth0
                </button>
              </Link>
            </div>
            <div className="flex w-full h-fit pt-1 pr-4 pb-3 pl-4 justify-center">
              <p
                className={`${PlusJakartaSans} font-normal text-[14px] leading-5 tracking-normal`}
              >
                Secured by Auth0
              </p>
            </div>

            <div className=""></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
