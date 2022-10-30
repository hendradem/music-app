import React from "react";

function ListLoader() {
  return (
    <div>
      <div
        role="status"
        className="p-0 mt-[10px] space-y-4 max-w-md rounded shadow animate-pulse dark:divide-gray-700   "
      >
        <div class="flex h-6 items-center w-full space-x-2 max-w-[360px]">
          <div class="h-6 bg-gray-300 rounded-full dark:bg-gray-600 w-[65px]"></div>
          <div class="h-6 bg-gray-200 rounded-full dark:bg-gray-700 w-[65px]"></div>
          <div class="h-6 bg-gray-300 rounded-full dark:bg-gray-600 w-[70px]"></div>
        </div>

        <div className="flex">
          <div className="h-10 w-10 mr-2 bg-gray-300 rounded-md"></div>
          <div className="mt-1">
            <div className="w-[180px] h-2.5  bg-gray-300 rounded-md mb-2"></div>
            <div className="w-[200px] h-2 bg-gray-200 rounded-md"></div>
          </div>
        </div>
        <div className="flex">
          <div className="h-10 w-10 mr-2 bg-gray-300 rounded-md"></div>
          <div className="mt-1">
            <div className="w-[180px] h-2.5  bg-gray-300 rounded-md mb-2"></div>
            <div className="w-[200px] h-2 bg-gray-200 rounded-md"></div>
          </div>
        </div>
        <div className="flex">
          <div className="h-10 w-10 mr-2 bg-gray-300 rounded-md"></div>
          <div className="mt-1">
            <div className="w-[180px] h-2.5  bg-gray-300 rounded-md mb-2"></div>
            <div className="w-[200px] h-2 bg-gray-200 rounded-md"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ListLoader;
