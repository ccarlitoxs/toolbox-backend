import axios from "axios";
import { backendUrl } from "../config/ENV.js";
import { setHeaders } from "../utils/setHeaders.js";

const getFiles = async (req) => {
  const url = `${backendUrl}/secret/files`;

  const headers = setHeaders(req.headers);

  const { data } = await axios.get(url, { headers }).catch((err) => {
    err.origin = "";
    throw err;
  });

  return data;
};

export default getFiles;
