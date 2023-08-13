import { useState, useEffect } from "react";

export default function useFetch(url) {
  const [data, setData] = useState([]);
  const [isDataReceive, setIsDataReceive] = useState(false);
  const [error, setError] = useState(null);


  useEffect(() => {
    fetch(url)
      .then(res => {
        if(!res.ok) {
          throw Error("Could not fetch the data for that resource");
        }
        return res.json();
      })
      .then(data => {
        setIsDataReceive(true);
        setData(data);
      })
      .catch(err => {
        setError(err.message);
      })
  }, [url])

  return {data, isDataReceive, error}
}