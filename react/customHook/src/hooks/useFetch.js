// react 규칙 상 'use'로 시작하는 이름을 가진 함수는 custom hook으로 분류된다.
// 그리고 그 함수를 찾아 특정 규칙을 부여한다.

import { useEffect, useState } from "react";

export function useFetch(fetchFn, initialValue) {
  const [isFetching, setIsFetching] = useState(false);
  const [error, setError] = useState();
  const [fetchedData, setFetchedData] = useState(initialValue);

  useEffect(() => {
    async function fetchData() {
      setIsFetching(true);
      try {
        if (fetchFn) {
          const data = await fetchFn();
          setFetchedData(data);
          console.log("fetched data", data);
        }
      } catch (error) {
        console.log(error);
        setError({ message: error.message || "Failed to fetch data." });
      }

      setIsFetching(false);
    }

    fetchData();
  }, [fetchFn]);

  useEffect(() => {
    console.log("useFetch fetchedData", fetchedData);
  }, [fetchedData]);

  return {
    isFetching,
    fetchedData,
    setFetchedData,
    error,
  };
}
