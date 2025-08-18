
import { auth0 } from "@/lib/auth0";
import { redirect } from "next/navigation";
import React from "react";
import PlusJakartaSans from "@/TextFonts/Fonts";
import Link from "next/link";


async function Login() {

  const session = await auth0.getSession();

  // If no session, show sign-up and login buttons
  if (!session) {
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
            
            <div className="flex w-full h-fit justify-center pt-3 pr-4 pb-3 pl-4">
              <Link href="/auth/login" className="w-full">
                <button
                  className={`${PlusJakartaSans} font-bold text-[14px] leading-5 tracking-normal flex justify-center items-center w-full h-[40px] rounded-[20px] bg-buttoms`}
                >
                  Log in with Auth0
                </button>
              </Link>
            </div>
            <div className="flex w-full h-fit pt-1 pr-4 pb-3 pl-4 justify-center">
              <p
                className={`${PlusJakartaSans} font-normal text-[14px] leading-5 tracking-normal mt-3`}
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

   // If session exists
  return (
    redirect("/pages")
  );

}


export default Login;
