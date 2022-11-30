import { useEffect, useState, useCallback } from "react";
import Api from "../api/Api";

export const useFilesList = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [filesData, setFilesData] = useState([]);

  const getFilesData = useCallback(async (fileName) => {
    try {
      const resp = await Api.get(
        `/files/data${fileName ? "?fileName=" + fileName : ""}`
      );
      setFilesData(resp.data);
      setIsLoading(false);
      setIsError(false);
    } catch (error) {
      setIsError(true);
      console.log(error);
    }
  }, []);

  useEffect(() => {
    getFilesData();
  }, [getFilesData]);

  return {
    isLoading,
    isError,
    getFilesData,
    filesData,
  };
};
