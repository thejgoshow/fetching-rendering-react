import { useState, useEffect } from "react";
import axios from "axios";

export default function FetchData({ url, update }) {
  const [data, setData] = useState({
    loading: true,
    data: [],
    isError: false,
    update: update
  });

  useEffect(() => {
    fetchFromAPI();
  }, [update]);

  function fetchFromAPI() {
    axios
      .get(url)
      .then((response) => {
        setData({ loading: false });
        //console.log(response);
        setData(response.data);
      })
      .catch((error) => {
        console.error(`Error: ${error}`);
        setData({ isError: true });
        return <div role="alert">Oops</div>;
      });
  }

  return <div>{data.loading ? <p>Loading...</p> : JSON.stringify(data)}</div>;
}
