import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import SearchResult from "../../components/search/SearchResult";
import Navbar from "../../layout/navbar/Navbar";
import Layout from "../../layout/Layout";
import VertivalListLoader from "../../components/loader/VertivalListLoader";
import SquareLoader from "../../components/loader/SquareLoader";

import { HiSearch, HiArrowSmLeft } from "react-icons/hi";

function Index() {
  const APIurl = process.env.NEXT_PUBLIC_LASTFM_API_URL;
  const [isSearchBoxClicked, setIsSearchBoxClicked] = useState(false);
  const [searchResult, setSearchResult] = useState();
  const [popularSongIndonesia, setPopularSongIndonesia] = useState();
  const [selectedFilter, setSelectedFilter] = useState("all");
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingGeoArtist, setIsLoadingGeoArtist] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const searchMethod = {
    songs: "track.search",
    artists: "artist.search",
    geo: "geo.gettopartists&country=indonesia",
    topTracks: "artist.gettoptracks",
  };
  useEffect(() => {
    getSearchData();
    getPopularByGeo();
  }, [searchValue]);

  const getSearchData = async () => {
    try {
      setIsLoading(true);
      const artist = await axios.get(
        `${APIurl}/?format=json&method=${searchMethod.artists}&artist=${searchValue}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}`
      );
      const topSongs = await axios.get(
        `${APIurl}/?format=json&method=${searchMethod.topTracks}&artist=${searchValue}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}`
      );
      const song = await axios.get(
        `${APIurl}/?format=json&method=${searchMethod.songs}&track=${searchValue}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}`
      );

      // get top 5 songs
      const topSongsResult = topSongs.data.toptracks.track.splice(0, 5);

      const artistResult = artist.data.results.artistmatches.artist;
      artistResult.map((item) => {
        item.type = "artist";
      });
      const songResult = topSongsResult.concat(
        song.data.results.trackmatches.track.slice(5, 30)
      );
      songResult.map((item) => {
        item.type = "song";
      });

      // const resultData = artistResult.concat(songResult);
      // setSearchResult(resultData);
      setSelectedFilter("top"); // set selected filter to add conditional css in filter button

      if (selectedFilter === "top") {
        setSearchResult(songResult);
      }

      setIsLoading(false);
    } catch (error) {
      console.error(error);
    }
  };

  const searchByFilter = async (filter) => {
    switch (filter) {
      case "song":
        try {
          setIsLoading(true);
          const song = await axios.get(
            `${APIurl}/?format=json&method=${searchMethod.songs}&track=${searchValue}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}`
          );
          const songResult = song.data.results.trackmatches.track;
          songResult.map((item) => {
            item.type = "song";
          });

          setSearchResult(songResult);
          setSelectedFilter("song"); // set selected filter to add conditional css in filter button
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
        break;
      case "artist":
        try {
          setIsLoading(true);
          const artist = await axios.get(
            `${APIurl}/?format=json&method=${searchMethod.artists}&artist=${searchValue}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}`
          );

          const artistResult = artist.data.results.artistmatches.artist;
          artistResult.map((item) => {
            item.type = "artist";
          });

          setSearchResult(artistResult);
          setSelectedFilter("artist"); // set selected filter to add conditional css in filter button
          setIsLoading(false);
        } catch (error) {
          console.error(error);
        }
        break;
      case "all":
        getSearchData();
        break;

      default:
        break;
    }
  };

  const getPopularByGeo = async () => {
    setIsLoadingGeoArtist(true);
    const popular = await axios.get(
      `${APIurl}/?format=json&method=${searchMethod.geo}&api_key=${process.env.NEXT_PUBLIC_LASTFM_API_KEY}`
    );
    setPopularSongIndonesia(popular.data.topartists.artist.slice(0, 12));
    setIsLoadingGeoArtist(false);
  };

  function geoLoader() {
    return (
      <div>
        <div className="w-[100%] h-[163px] animate-pulse m-1 bg-gray-200 rounded-lg"></div>
      </div>
    );
  }

  return (
    <Layout withMenu={true}>
      <div className="text-white py-10">
        <Navbar>
          <div className="relative w-[100%]">
            <div className="flex absolute inset-y-0 left-0 items-center pl-3">
              {isSearchBoxClicked ? (
                <HiArrowSmLeft
                  className="w-6 h-6 text-gray-400 cursor-pointer"
                  onClick={() => {
                    setIsSearchBoxClicked(false);
                    setSearchValue("");
                  }}
                />
              ) : (
                <HiSearch className="w-5 h-5 text-gray-400" />
              )}
            </div>
            <input
              onClick={() => {
                setIsSearchBoxClicked(true);
              }}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              type="text"
              value={searchValue}
              className="bg-gray-50 ring-0 border-0 text-gray-900 text-sm rounded-md focus:ring-0 focus:border-0 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search title, musician or genre"
            />
          </div>
        </Navbar>

        <div className="p-4">
          {isSearchBoxClicked && isLoading ? (
            <VertivalListLoader addMarginTop={true} />
          ) : null}
          {isSearchBoxClicked && !isLoading ? (
            <SearchResult
              data={searchResult}
              filterBy={searchByFilter}
              selectedSearchFilter={selectedFilter}
            />
          ) : null}
          {!isSearchBoxClicked ? (
            <div className="explore-area">
              <div className="mt-4">
                <h4 className="text-md font-medium text-white">
                  Explore genre
                </h4>
                <div className="w-full h-[100px] bg-amber-300 rounded-md mt-2"></div>
              </div>
              <div className="mt-4">
                <h4 className="text-md font-medium text-white">
                  🔥 Most popular songs in Indonesia
                </h4>
                <div className="grid grid-cols-3 gap-2 mt-2">
                  {isLoadingGeoArtist
                    ? geoLoader()
                    : popularSongIndonesia &&
                      popularSongIndonesia.map((item, index) => {
                        return (
                          <div
                            key={index}
                            className="w-full h-[100px] flex items-center justify-center text-xl font-bold text-amber-800 bg-amber-300 rounded-md"
                          >
                            {item.name}
                          </div>
                        );
                      })}
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </Layout>
  );
}

export default Index;
