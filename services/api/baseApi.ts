import axios from "axios";
import { getJWT } from "../authService";

const baseURL = process.env.BASE_URL;

const baseApi = axios.create({
  baseURL: baseURL,
  withCredentials: true,
});

baseApi.interceptors.request.use(
  async (config) => {
    const token = await getJWT();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default baseApi;
