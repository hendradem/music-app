import { useEffect, useState } from "react";
import axios from "axios";

const useFetchData = (method) => {
  const [data, setData] = useState({});
  const APIurl = "http://ws.audioscrobbler.com/2.0/";

  const fetchData = async () => {
    try {
      const { data: response } = await axios.get(
        `${APIurl}/?format=json&method=chart.${method}&api_key=${process.env.LASTFM_API_KEY}`
      );
      setData(response);
    } catch (error) {
      console.error(error);
    }
  };

  fetchData();
  return data;
};

export default useFetchData;
