"use client";
import Link from "next/link";
import PlusJakartaSans from "@/TextFonts/Fonts";
import SearchInput from "./SearchInput";
import { useUser } from "@auth0/nextjs-auth0";



export const Header = () => {

   const { user, error, isLoading } = useUser();

  if (isLoading) return <div>Cargando...</div>;
  if (error) return <div>Error: {error.message}</div>;

  if (!user) return <div>No hay usuario logueado</div>;
  

    return (
    <div className="flex items-center w-full h-16 border-b justify-between pt-3 pr-10 pb-3 pl-10">
      <div className="flex w-[700px] h-6 gap-8">
        <div className=" flex items-center w-32 h-6 gap-3">
          <div className="flex w-4 h-4">
            <img
              src="/vectorCinema.png"
              alt="icono cinema"
              className="w-4 h-4"
            />
          </div>

          <div className="flex flex-col w-16 h-6">
            <Link href={"/"}>
              <h1
                className={`${PlusJakartaSans} w-[700] text-[18px] leading-6 tracking-[0px]`}
              >
                CineScope
              </h1>
            </Link>
          </div>
        </div>
        <div className="flex w-[320px] h-5">

          {/* navbar */}

          <ul className="flex w-10 h-5 gap-9">
            <li className="w-10 h-5">
              <Link
                href={`/pages`}
                className={`${PlusJakartaSans} font-medium text-[14px] leading-5 tracking-normal`}
              >
                Home
              </Link>
            </li>

            <li className="w-12 h-5">
              <Link
                href="/pages/search"
                className={`${PlusJakartaSans} font-medium text-[14px] leading-5 tracking-normal`}
              >
                Search
              </Link>
            </li>

            <li className="w-[75px] h-[21px]">
              <Link
                href="/pages/categories"
                className={`${PlusJakartaSans} font-medium text-[14px] leading-5 tracking-normal`}
              >
                Categories
              </Link>
            </li>

            <li className="w-[48px] h-[21px]">
              <Link
                href="/pages/favorites"
                className={`${PlusJakartaSans} font-medium text-[14px] leading-5 tracking-normal`}
              >
                Favorites
              </Link>
            </li>

            <li className="w-[50px] h-[21px]">
              <Link href="/auth/logout" className={`${PlusJakartaSans} font-medium text-[14px] leading-5 tracking-normal`}>
                <button>Logout</button>
              </Link>
            </li>

          </ul>
        </div>
      </div>

      <div className="flex w-[650px] h-10 gap-8 justify-end">
        <SearchInput className="flex h-full w-full bg-buttoms rounded-2xl text-center" />

        <div className="flex w-10 h-10 w-max-[480px] rounded-[8px] pr-[10px] pl-[10px] pt-[10px] pb-[10px] gap-2 bg-buttoms">

          <img src="/save.png" className="flex w-5 h-5" />

        </div>

        {!user.picture ? <img src={user.picture} className="w-10 h-10 rounded-[20px]"/> : <img src="/Picture.jpg" className="w-10 h-10 rounded-[20px]" />  }
        
      </div>
    </div>
  );
};
