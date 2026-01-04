import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://backend-two-beta-52.vercel.app/api",
  // baseURL: "http://localhost:5000/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default apiClient;
