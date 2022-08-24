import React from "react";
import { HiSearch } from "react-icons/hi";

function SearchBox() {
  const onSearchBoxClick = () => {
    alert(123);
  };

  return (
    <div>
      <div className="relative">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
          <HiSearch className="w-6 h-6 text-gray-400" />
        </div>
        <input
          onClick={onSearchBoxClick}
          type="text"
          className="bg-gray-50 ring-0 border-0    text-gray-900 text-sm rounded-md focus:ring-0 focus:border-0 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Search title, musician or genre"
        />
      </div>
    </div>
  );
}

export default SearchBox;
