// useFetchData.js
import { useState, useEffect } from "react";

function useFetchData(url) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return; // 🚨 very important

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(url);
        if (!res.ok) throw new Error(`HTTP error! Status: ${res.status}`);
        const json = await res.json();
        setData(json);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData(null);
      }
      setLoading(false);
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
}

export default useFetchData;
