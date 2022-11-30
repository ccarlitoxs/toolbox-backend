import axios from "axios";
import { backendUrl } from "../config/ENV.js";
import { setHeaders } from "../utils/setHeaders.js";

const getFileByName = (req, filename) => {

  const url = `${backendUrl}/secret/file/${filename}`;

  const headers = setHeaders(req.headers);

  const response = axios.get(url, { headers }).catch((err) => {
    err.origin = "";
    throw err;
  });

  return response;
};

export default getFileByName;
