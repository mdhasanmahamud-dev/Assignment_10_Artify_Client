import axios from "axios";

const apiPrivate = axios.create({
  baseURL: "http://localhost:5000/api", // same base URL
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  },
});

export default apiPrivate;
