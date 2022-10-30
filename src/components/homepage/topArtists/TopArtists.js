import Link from "next/link";
import React from "react";
import Image from "next/image";

function TopArtists({ artistsData }) {
  const pic =
    "https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60";

  return (
    <div>
      <ul className="grid grid-cols-5 gap-2 mt-3">
        {artistsData &&
          artistsData.map((item, index) => {
            return (
              <Link key={index} href={`/detail/profile?name=${item.name}`}>
                <a>
                  <li
                    key={index}
                    className="rounded-md flex flex-col items-center space-y-2 cursor-pointer"
                  >
                    <Image
                      width={100}
                      height={100}
                      className="w-[90px] h-[90px] rounded-full"
                      src={pic}
                    />

                    <span className="text-[14px] text-gray-500 font-medium">
                      {" "}
                      {item.name}{" "}
                    </span>
                  </li>
                </a>
              </Link>
            );
          })}
      </ul>
    </div>
  );
}

export default TopArtists;
