import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";
import {
  HiOutlineHome,
  HiSearch,
  HiMusicNote,
  HiOutlineUser,
} from "react-icons/hi";

function Menu() {
  const router = useRouter();
  return (
    <div>
      <>
        <div className="fixed bottom-0 w-[100%] lg:w-[30%] sm:w-[100%] py-2 px-[70px] border-r border-[#1E1E1E] bg-[#0F0F0F]">
          <div className="flex justify-between">
            <Link href="/">
              <a
                className={`text-gray-200 flex flex-col items-center hover:text-gray-400 ${
                  router.pathname == "/"
                    ? "text-amber-300 hover:text-amber-300"
                    : ""
                }`}
              >
                <HiOutlineHome size={20} />
                <span className="text-[12px]">home</span>
              </a>
            </Link>

            <Link href="/search">
              <a
                className={`text-gray-200 flex flex-col items-center hover:text-gray-400 ${
                  router.pathname == "/search"
                    ? "text-amber-300 hover:text-amber-300"
                    : ""
                }`}
              >
                <HiSearch size={20} />
                <span className="text-[12px]">search</span>
              </a>
            </Link>

            <Link href="/collection">
              <a
                className={`text-gray-200 flex flex-col items-center hover:text-gray-400 ${
                  router.pathname == "/collection"
                    ? "text-amber-300 hover:text-amber-300"
                    : ""
                }`}
              >
                <HiMusicNote size={20} />
                <span className="text-[12px]">collection</span>
              </a>
            </Link>

            <Link href="/detail/profile/user">
              <a
                className={`text-gray-200 flex flex-col items-center hover:text-gray-400 ${
                  router.pathname == "/detail/profile/user"
                    ? "text-amber-300 hover:text-amber-300"
                    : ""
                }`}
              >
                <HiOutlineUser size={20} />
                <span className="text-[12px]">profile</span>
              </a>
            </Link>
          </div>
        </div>
      </>
    </div>
  );
}

export default Menu;
