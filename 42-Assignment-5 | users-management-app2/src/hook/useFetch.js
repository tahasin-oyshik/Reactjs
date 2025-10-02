import { useEffect, useState } from 'react';

const useFetch = (url) => {
  // TASK 1: Complete This Custom Hook
  // - create 3 states: data, isLoading, error
  // - fetch data & handle error
  // - return 3 states
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await fetch(url);
        const data = await response.json();
        setData(data);
        setIsLoading(false);
        setError(null);
      } catch (error) {
        setIsLoading(false);
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  return { isLoading, error, data };
};

export default useFetch;
