import axios from "axios";
import BASE_URL from "./BaseUrl";

const token = localStorage.getItem("token");

const AuthorizedInstance = axios.create({
  baseURL: BASE_URL,
  maxBodyLength: Infinity,
  mode: "no-mode",
  referrerPolicy: "no-referrer",
});

AuthorizedInstance.interceptors.request.use(
  (config) => {
    if (token !== null) {
      config.headers.authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

export default AuthorizedInstance;