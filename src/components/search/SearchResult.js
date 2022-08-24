import React, { useState } from "react";
import Link from "next/link";
import { HiMusicNote, HiUserGroup, HiMenuAlt2 } from "react-icons/hi";

function SearchResult({ data, filterBy, selectedSearchFilter }) {
  return (
    <div className="mt-2">
      <div className="mb-2 flex">
        <button
          type="button"
          onClick={() => {
            filterBy("all");
          }}
          class={`flex items-center text-white  border-0 border-gray-300 focus:outline-none focus:ring-0 font-medium rounded-full text-sm px-3 py-[3px] mr-2 mb-2 ${
            selectedSearchFilter === "all"
              ? "bg-white text-gray-800"
              : " bg-[#202020]"
          }`}
        >
          <HiMenuAlt2 className="w-3 h-3 mr-2" />
          All
        </button>
        <button
          type="button"
          onClick={() => {
            filterBy("song"); // call function from props (parent) to add filter by song
          }}
          class={`flex items-center text-white  border-0 border-gray-300 focus:outline-none focus:ring-0 font-medium rounded-full text-sm px-3 py-[3px] mr-2 mb-2 ${
            selectedSearchFilter === "song"
              ? "bg-white text-gray-800"
              : " bg-[#202020]"
          }`}
        >
          <HiMusicNote className="w-3 h-3 mr-2" />
          Song
        </button>
        <button
          type="button"
          onClick={() => {
            filterBy("artist"); // call function from props (parent) to add filter by artist
          }}
          class={`flex items-center text-white  border-0 border-gray-300 focus:outline-none focus:ring-0 font-medium rounded-full text-sm px-3 py-[3px] mr-2 mb-2 ${
            selectedSearchFilter === "artist"
              ? "bg-white text-gray-800"
              : " bg-[#202020]"
          }`}
        >
          <HiUserGroup className="w-3 h-3 mr-2" />
          Artist
        </button>
      </div>

      <div className="flow-root">
        <ul role="list" className="space-y-2">
          {data &&
            data.map((item, index) => {
              return (
                <div>
                  {item.type == "artist" ? (
                    <Link href={`/detail/profile?name=${item.name}`}>
                      <a>
                        <li
                          key={index}
                          className="p-2 rounded-lg bg-[#1E1E1E] hover:bg-[#161616] cursor-pointer"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 rounded-full bg-amber-300 flex items-center justify-center">
                                <h4 className="text-lg font-bold text-amber-900">
                                  {index + 1}
                                </h4>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-white truncate dark:text-white">
                                {item.name}
                              </p>
                              <p className="text-sm text-white truncate dark:text-gray-400">
                                {item.type}
                              </p>
                            </div>
                          </div>
                        </li>
                      </a>
                    </Link>
                  ) : (
                    <li
                      key={index}
                      className="p-2 rounded-lg bg-[#1E1E1E] hover:bg-[#161616] cursor-pointer"
                    >
                      <div className="flex items-center space-x-4">
                        <div className="flex-shrink-0">
                          <div className="w-10 h-10 rounded-full bg-amber-300 flex items-center justify-center">
                            <h4 className="text-lg font-bold text-amber-900">
                              {index + 1}
                            </h4>
                          </div>
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-white truncate dark:text-white">
                            {item.name}
                          </p>
                          <p className="text-sm text-white truncate dark:text-gray-400">
                            {item.type}
                          </p>
                        </div>
                      </div>
                    </li>
                  )}
                </div>
              );
            })}
        </ul>
      </div>
    </div>
  );
}

export default SearchResult;
