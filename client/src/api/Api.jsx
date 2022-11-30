import axios from "axios";

const baseURL = `${process.env.ApiBaseUrl || "http://localhost:4000"}/v1`;

const Api = axios.create({ baseURL });

Api.interceptors.request.use(async (config) => {
  //Config Headers here
  // config.headers['x-token'] = token;
  return config;
});

export default Api;
