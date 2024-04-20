import { useEffect, useState } from "react";
import getChattingList from "../api/chat/getChattingList";

const useGetChattingList = () => {
  const [data, setData] = useState();
  const [loading, setLoading] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const res = await getChattingList();
        if (res) {
          setData(res);
        }
      } catch (error) {
        console.error(error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { data, loading, error };
};

export default useGetChattingList;
