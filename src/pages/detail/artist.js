import React, { useEffect, useState, Fragment } from "react";
import Link from "next/link";
import axios from "axios";
import Layout from "../../layout/Layout";
import Navbar from "../../layout/navbar/Navbar";
import VertivalListLoader from "../../components/loader/VertivalListLoader";
import ProfilModal from "../../components/modal/ProfilModal";

import { HiArrowSmLeft } from "react-icons/hi";

function Artist() {
  const APIurl = process.env.NEXT_PUBLIC_LASTFM_API_URL;
  const [topArtist, setTopArtist] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [detailMusicData, setDetailMusicData] = useState();
  const [isOpenMusicOverviewModal, setIsOpenMusicOverviewModal] =
    useState(false);

  const requestMethod = {
    charts: "chart.gettoptracks",
    artists: "chart.gettopartists",
  };

  useEffect(() => {
    fetchTopArtist();
  }, []);

  const fetchTopArtist = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${APIurl}/?format=json&method=${requestMethod.artists}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}`
      );
      const result = response.data.artists.artist;
      console.log(result);
      setTopArtist(result);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

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
    <Layout>
      {isOpenMusicOverviewModal && (
        <ProfilModal
          data={detailMusicData}
          open={isOpenMusicOverviewModal}
          onClose={setIsOpenMusicOverviewModal}
        />
      )}
      <Navbar>
        <div className="flex items-center text-white">
          <Link href="/">
            <a>
              <HiArrowSmLeft className="w-5 h-5 mr-2" />
            </a>
          </Link>
          <span>Top Artists</span>
        </div>
      </Navbar>
      <div className="w-full h-[200px] relative mt-4">
        <div className="w-full h-full absolute blur-lg bg-[url('https://images.unsplash.com/photo-1571310100246-e0676f359b42?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fHNpbmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60')]"></div>
        <div className="w-full h-full absolute flex justify-center items-center z-2">
          <h1 className="text-white font-bold text-[30px]">Top Artists</h1>
        </div>
      </div>

      <div className="p-4 text-white">
        {isLoading ? (
          <VertivalListLoader />
        ) : (
          <div className="flow-root">
            <ul role="list" className="space-y-2">
              {topArtist &&
                topArtist.map((item, index) => {
                  return (
                    <Link
                      key={index}
                      href={`/detail/profile?name=${item.name}`}
                    >
                      <a>
                        <li
                          key={index}
                          className="p-2 rounded-lg bg-[#1E1E1E] hover:bg-[#161616] cursor-pointer mb-2"
                        >
                          <div className="flex items-center space-x-4">
                            <div className="flex-shrink-0">
                              <div className="w-10 h-10 rounded-full bg-indigo-300 flex items-center justify-center">
                                <h4 className="text-lg font-bold text-indigo-900">
                                  {index + 1}
                                </h4>
                              </div>
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-white truncate dark:text-white">
                                {item.name}
                              </p>
                              <p className="text-sm text-white truncate dark:text-gray-400">
                                {parseInt(item.playcount).toLocaleString()}{" "}
                                total plays
                              </p>
                            </div>
                          </div>
                        </li>
                      </a>
                    </Link>
                  );
                })}
            </ul>
          </div>
        )}
      </div>
    </Layout>
  );
}

export default Artist;
