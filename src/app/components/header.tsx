import Link from "next/link";
import plusJakartaSans from "../fonts/fontsPopulars";

export const Header = () => {
  return (
    <div className="flex items-center w-full h-[65px] border-b justify-between pt-[12px] pr-[40px] pb-[12px] pl-[40px]">
      <div className="flex w-[482px] h-[23px] gap-[32px]">
        <div className=" flex items-center w-[130px] h-[23px] gap-[16px]">
          <div className="flex w-[16px] h-[16px]">
            <img
              src="/vectorCinema.png"
              alt="icono cinema"
              className="w-[16px] h-[16px]"
            />
          </div>

          <div className="flex flex-col w-[98px] h-[23px]">
            <h1
              className={`${plusJakartaSans} w-[700] text-[18px] leading-[23px] tracking-[0px]`}
            >
              CineScope
            </h1>
          </div>
        </div>
        <div className="flex w-[320px] h-[21px]">
          {/* navbar */}

          <ul className="flex w-[41px] h-[21px] gap-[36px]">
            <Link href={`/`}>
              <li className="w-[41px] h-[21px]">
                <a
                  className={`${plusJakartaSans} w-[500] text-[14px] leading-[21px] tracking-[0px]`}
                >
                  Home
                </a>
              </li>
            </Link>

            <li className="w-[48px] h-[21px]">
              <a
                className={`${plusJakartaSans} w-[500] text-[14px] leading-[21px] tracking-[0px]`}
              >
                Search
              </a>
            </li>
            <li className="w-[75px] h-[21px]">
              <a
                className={`${plusJakartaSans} w-[500] text-[14px] leading-[21px] tracking-[0px]`}
              >
                Categories
              </a>
            </li>
            <li className="w-[48px] h-[21px]">
              <a
                className={`${plusJakartaSans} w-[500] text-[14px] leading-[21px] tracking-[0px]`}
              >
                People
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="flex w-[718px] h-[40px] gap-[32px] justify-end">
        <div className="flex flex-col w-[160px] h-[40px] min-w-[160px] max-w-[256px] relative">
          <input
            type="text"
            placeholder="Search"
            className="flex h-full w-full bg-[#472426] rounded-2xl text-center "
          />
          <img
            src="/vectorSearch.png"
            className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
          />
        </div>

        <div className="flex w-[40px] h-[40px] w-max-[480px] rounded-[8px] pr-[10px] pl-[10px] pt-[10px] pb-[10px] gap-[8px]  bg-[#472426]">
          <img src="/save.png" className="flex w-[20px] h-[20px]" />
        </div>

        <img src="photo.png" className="w-[40px] h-[40px] rounded-[20px]" />
      </div>
    </div>
  );
};
