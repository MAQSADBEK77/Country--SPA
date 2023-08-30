import { useState, useEffect, useCallback } from "react";
export function useFetch(API) {
  const [data, setData] = useState(null);
  const [isPending, setisPending] = useState(false);
  const [isError, setisError] = useState(false);
  const useCall = useCallback(() => {
    useEffect(() => {
      const fetchData = async () => {
        const res = await fetch(API);
        if (res.ok) {
          const data = await res.json();
          setData(data);
          setisPending(true);
        } else {
          setisError(true);
          setisPending(true);
        }
      };
      fetchData();
    }, [API]);
  }, [API]);
  useCall();
  return { data, isPending, isError };
}
