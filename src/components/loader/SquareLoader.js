import React from "react";
function SquareLoader() {
  return (
    <div className="grid grid-cols-3 gap-1">
      <div className="w-[auto] h-[163px] animate-pulse m-1">
        <div className="mt-2 w-full h-full bg-gray-200 rounded-lg"></div>
      </div>
      <div className="w-[auto] h-[163px] animate-pulse m-1">
        <div className="mt-2 w-full h-full bg-gray-200 rounded-lg"></div>
      </div>
      <div className="w-[auto] h-[163px] animate-pulse m-1">
        <div className="mt-2 w-full h-full bg-gray-200 rounded-lg"></div>
      </div>
    </div>
  );
}

export default SquareLoader;
