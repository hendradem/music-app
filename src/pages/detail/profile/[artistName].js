import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

import Layout from "../../../layout/Layout";
import Navbar from "../../../layout/navbar/Navbar";
import { HiArrowSmLeft } from "react-icons/hi";

export default function UserProfile() {
  const router = useRouter();
  const APIurl = process.env.NEXT_PUBLIC_LASTFM_API_URL;
  const [artistData, setArtistData] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const { artistName } = router.query;

  useEffect(() => {
    setTimeout(() => {
      if (artistName !== "") {
        getArtistData();
      } else {
        console.log("error");
      }
    }, 2000);
  }, []);

  const getArtistData = async () => {
    try {
      setIsLoading(true);
      const response = await axios.get(
        `${APIurl}/?method=artist.getinfo&artist=${artistName}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json`
      );
      const result = response.data.artist;
      console.log(result);
      setArtistData(result);
      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Layout withMenu={false}>
      <div className="text-white">
        <Navbar>
          <div className="flex items-center">
            <Link href="/detail/artist">
              <a>
                <HiArrowSmLeft className="w-5 h-5 mr-2" />
              </a>
            </Link>
            <h4>Profile</h4>
          </div>
        </Navbar>
        <div className="w-full h-[300px] pt-20 ">
          <div className="flex flex-col items-center pb-10">
            <img
              className="mb-3 w-[150px] h-[150px] object-cover rounded-full shadow-lg"
              src="https://images.unsplash.com/photo-1599594407433-7bbdab928b61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fHNpbmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
              alt="Bonnie image"
            />
            <h5 className="mb-1 text-xl font-medium text-white dark:text-white">
              asdasd
            </h5>
            <span className="text-sm text-white dark:text-gray-400">
              Visual Designer
            </span>
            <div className="flex justify-center items-center gap-2 mt-8">
              <div className="text-center mx-4">
                <p className="text-white">102</p>
                <span className="text-gray-400">Posts</span>
              </div>
              <div className="text-center mx-4">
                <p className="text-white">102</p>
                <span className="text-gray-400">Followers</span>
              </div>
              <div className="text-center mx-4">
                <p className="text-white">102</p>
                <span className="text-gray-400">Folowing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
