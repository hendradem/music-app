import React from "react";

function VerticalListCard({ listData, listType }) {
  return (
    <div>
      <div className="flow-root">
        {listType === "number" ? (
          <ul role="list" className="space-y-2">
            {listData &&
              listData.map((item, index) => {
                return (
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
                          {item.artist.name}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        ) : (
          <ul role="list" className="space-y-2">
            {listData &&
              listData.map((item, index) => {
                return (
                  <li
                    key={index}
                    className="p-2 rounded-lg bg-[#1E1E1E] hover:bg-[#161616] cursor-pointer"
                  >
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <img
                          src="https://source.unsplash.com/random/?night,sunset"
                          alt=""
                          className="h-10 w-10 rounded-md xl:mr-2.5"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-white truncate dark:text-white">
                          {item.name}
                        </p>
                        <p className="text-sm text-white truncate dark:text-gray-400">
                          {item.artist.name}
                        </p>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default VerticalListCard;
