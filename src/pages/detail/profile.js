import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";
import Layout from "../../layout/Layout";
import Navbar from "../../layout/navbar/Navbar";
import VerticalListCard from "../../components/list/VerticalListCard";
import { HiArrowSmLeft } from "react-icons/hi";
import Image from "next/image";

export default function Profile() {
  const router = useRouter();
  const APIurl = process.env.NEXT_PUBLIC_LASTFM_API_URL;
  const [data, setData] = useState();
  const [topSongData, setTopSongData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { artistName, name } = router.query;

  useEffect(() => {
    if (name !== "") {
      getArtistData();
      getTopSong();
    }
  }, [name]);

  const getArtistData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${APIurl}/?method=artist.getinfo&artist=${name}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json`
      );
      const result = response.data.artist;
      setData(result);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const getTopSong = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${APIurl}/?method=artist.gettoptracks&artist=${name}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json`
      );
      const result = response.data.toptracks.track.slice(0, 5);
      setTopSongData(result);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const loader = () => {
    return (
      <div className="flex space-x-3 animate-pulse">
        <div className="w-[100px] h-[100px] rounded-xl bg-gray-200"></div>
        <div className="flex flex-col items-start mt-2">
          <div className="h-5 bg-gray-200 rounded-md dark:bg-gray-700 w-32 mb-3"></div>
          <div className="w-48 h-3 bg-gray-200 rounded-full dark:bg-gray-700"></div>
        </div>
      </div>
    );
  };

  return (
    <Layout withMenu={false}>
      <div className="text-white">
        <Navbar>
          <div
            className="flex items-center cursor-pointer"
            onClick={() => router.back()}
          >
            <HiArrowSmLeft className="w-5 h-5 mr-2" />
            <h4>Profile</h4>
          </div>
        </Navbar>
        <div className="w-full px-8 h-[300px] pt-20 mb-20">
          {isLoading ? (
            loader()
          ) : (
            <div>
              <div className="flex artist-data-information">
                <Image
                  width={100}
                  height={100}
                  className="mb-3 w-[100px] h-[100px] object-cover rounded-xl shadow-lg"
                  src="https://images.unsplash.com/photo-1599594407433-7bbdab928b61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fHNpbmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
                  alt="Bonnie image"
                />
                <div className="ml-4">
                  <h5 className="text-xl font-medium text-white dark:text-white">
                    {data && data.name}
                  </h5>

                  <ul className="space-y-1 max-w-md list-inside text-gray-500 dark:text-gray-400">
                    <li>
                      <span className="font-normal text-[15px] text-gray-200 dark:text-white">
                        {data &&
                          parseInt(data.stats.listeners).toLocaleString()}{" "}
                        listeners
                      </span>
                    </li>
                  </ul>

                  <div className="flex flex-wrap mt-2">
                    {data &&
                      data.tags.tag.map((item, index) => {
                        return (
                          <span
                            key={index}
                            className="text-gray-100 border border-gray-400 text-xs mr-2 mt-1 px-2.5 py-0.5 rounded-full"
                          >
                            {item.name}
                          </span>
                        );
                      })}
                  </div>

                  {/* <Link href="">
                    <a target="_blank">
                      <button
                        type="button"
                        className="text-gray-900 mt-4 bg-white border border-gray-300 focus:outline-none hover:bg-gray-100 focus:ring-0  font-medium rounded-md text-sm px-2 py-1"
                      >
                        Full profile
                      </button>
                    </a>
                  </Link> */}
                </div>
              </div>
              <span className="text-sm text-white dark:text-gray-400">
                <span>
                  <p className="text-white font-semibold text-lg">About</p>
                </span>
                {data && data.bio.summary}
              </span>

              <div className="mt-5">
                <span>
                  <p className="text-white font-semibold text-lg mb-2">
                    Top songs
                  </p>
                </span>
                <VerticalListCard listData={topSongData} listType="number" />
              </div>

              <div className="mt-5 mb-[180px]">
                <span>
                  <p className="text-white font-semibold text-lg">
                    Similar artists
                  </p>
                </span>
                <ul className="grid grid-cols-5 gap-2 mt-3">
                  {data &&
                    data.similar.artist.map((item, index) => {
                      return (
                        <Link
                          key={index}
                          href={`/detail/profile?name=${item.name}`}
                        >
                          <a>
                            <li className="rounded-md flex flex-col items-center space-y-2 cursor-pointer">
                              <img
                                className="w-[90px] h-[90px] rounded-full"
                                src="https://images.unsplash.com/photo-1526218626217-dc65a29bb444?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8c2luZ2VyfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=400&q=60"
                              />

                              <span className="text-[14px] text-gray-500 font-medium text-center">
                                {item.name}
                              </span>
                            </li>
                          </a>
                        </Link>
                      );
                    })}
                </ul>
              </div>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
}
