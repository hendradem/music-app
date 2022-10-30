import React, { useState } from "react";
import { HiChevronRight, HiOutlineHeart } from "react-icons/hi";
import ProfilModal from "../../modal/ProfilModal";
import Image from "next/image";

function TopCharts({ chartData }) {
  const [detailMusicData, setDetailMusicData] = useState();
  const [isOpenMusicOverviewModal, setIsOpenMusicOverviewModal] =
    useState(false);

  const musicOnClickHandler = (
    musicTitle,
    musicUrl,
    musicPlaycount,
    artistName
  ) => {
    const musicParams = { musicTitle, musicUrl, musicPlaycount, artistName };
    setDetailMusicData(musicParams);
    setIsOpenMusicOverviewModal(true);
  };

  return (
    <div>
      {isOpenMusicOverviewModal && (
        <ProfilModal
          data={detailMusicData}
          open={isOpenMusicOverviewModal}
          onClose={setIsOpenMusicOverviewModal}
        />
      )}
      <div className="grid grid-cols-3 gap-1 mt-2 ">
        {chartData &&
          chartData.map((item, index) => {
            return (
              <div
                key={index}
                className="w-auto h-auto rounded-md bg-[#1e1e1e] p-2 m-1 cursor-pointer"
                onClick={() => {
                  musicOnClickHandler(
                    item.name,
                    item.url,
                    item.playcount,
                    item.artist.name
                  );
                }}
              >
                <div className="absolute flex justify-between p-2  ">
                  <HiOutlineHeart className="right-0 w-4 h-4 text-white iconHoverAnimation" />
                </div>
                <div className="p-0 rounded-md overflow-hidden w-full h-[100px] bg-white mx-3 md:mx-0 lg:mx-0">
                  <Image
                    width={100}
                    height={100}
                    alt="as"
                    className="w-full h-full bg-contain"
                    src="https://images.unsplash.com/photo-1661103517104-9d118ccad126?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzNHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&q=60"
                  />
                </div>
                <div className="pb-2 text-white">
                  <div className="pt-1">
                    <h4 className="text-[14px] font-semibold">
                      #{index + 1} {item.name}
                    </h4>
                    <p className="text-[11px] font-normal text-gray-100">
                      {item.artist.name}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default TopCharts;
