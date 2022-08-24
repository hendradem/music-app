import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import axios from "axios";

import Layout from "../../../layout/Layout";
import Navbar from "../../../layout/navbar/Navbar";
import { HiArrowSmLeft } from "react-icons/hi";

export default function userProfile() {
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
        console.log("gak dapet");
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
          <div class="flex flex-col items-center pb-10">
            <img
              class="mb-3 w-[150px] h-[150px] object-cover rounded-full shadow-lg"
              src="https://images.unsplash.com/photo-1599594407433-7bbdab928b61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8ODd8fHNpbmdlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=400&q=60"
              alt="Bonnie image"
            />
            <h5 class="mb-1 text-xl font-medium text-white dark:text-white">
              asdasd
            </h5>
            <span class="text-sm text-white dark:text-gray-400">
              Visual Designer
            </span>
            <div class="flex justify-center items-center gap-2 mt-8">
              <div class="text-center mx-4">
                <p class="text-white">102</p>
                <span class="text-gray-400">Posts</span>
              </div>
              <div class="text-center mx-4">
                <p class="text-white">102</p>
                <span class="text-gray-400">Followers</span>
              </div>
              <div class="text-center mx-4">
                <p class="text-white">102</p>
                <span class="text-gray-400">Folowing</span>
              </div>
            </div>
            {/* <div class="flex mt-4 space-x-3 md:mt-6">
              <a
                href="#"
                class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Add friend
              </a>
              <a
                href="#"
                class="inline-flex items-center py-2 px-4 text-sm font-medium text-center text-gray-900 bg-white rounded-lg border border-gray-300 hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
              >
                Message
              </a>
            </div> */}
          </div>
        </div>
      </div>
    </Layout>
  );
}

// export async function getStaticProps() {
//   const result = await fetch(
//     `${APIurl}/?method=artist.getinfo&artist=${artistName}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}&format=json`
//   ).then((res) => res.json());
//   return {
//     props: {
//       artistData: result,
//     },
//   };
// }
