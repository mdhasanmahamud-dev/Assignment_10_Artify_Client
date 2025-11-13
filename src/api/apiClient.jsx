import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://backend-tau-swart.vercel.app/api",
  headers: {
    "Content-Type": "application/json",
  },
});
export default apiClient;
