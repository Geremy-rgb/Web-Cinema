"use client"
import Link from "next/link";
import PlusJakartaSans from "@/TextFonts/Fonts";
import SearchInput from "./SearchInput";

export const Header = () => {

  return (
    <div className="flex items-center w-full h-16 border-b justify-between pt-3 pr-10 pb-3 pl-10">
      <div className="flex w-[482px] h-6 gap-8">
        <div className=" flex items-center w-32 h-6 gap-4">
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
                href={`/`}
                className={`${PlusJakartaSans} w-[500] text-[14px] leading-5 tracking-[0px]`}
              >
                Home
              </Link>
            </li>

            <li className="w-12 h-5">
              <Link
              href="/search"
                className={`${PlusJakartaSans} w-[500] text-[14px] leading-5 tracking-[0px]`}
              >
                Search
              </Link>
            </li>

            <li className="w-[75px] h-[21px]">
              <a
                className={`${PlusJakartaSans} w-[500] text-[14px] leading-5 tracking-[0px]`}
              >
                Categories
              </a>
            </li>

            <li className="w-[48px] h-[21px]">
              <Link
                href="/favorites"
                className={`${PlusJakartaSans} w-[500] text-[14px] leading-5 tracking-[0px]`}
              >
                Favorites
              </Link>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex w-[718px] h-[40px] gap-[32px] justify-end">

        <SearchInput className="flex h-full w-full bg-buttoms rounded-2xl text-center"/>

        <div className="flex w-[40px] h-[40px] w-max-[480px] rounded-[8px] pr-[10px] pl-[10px] pt-[10px] pb-[10px] gap-[8px]  bg-buttoms">
          <img src="/save.png" className="flex w-[20px] h-[20px]" />

        </div>

        <img src="photo.png" className="w-[40px] h-[40px] rounded-[20px]" />
      </div>
    </div>
  );
};
