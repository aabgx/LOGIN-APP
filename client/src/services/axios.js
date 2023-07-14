import axios from "axios";

const axiosInstance = axios.create({
  //   baseURL: "http://localhost:8080",
  baseURL: "https://jsonplaceholder.typicode.com",
  headers: {
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

export default axiosInstance;
