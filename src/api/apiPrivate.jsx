import axios from "axios";

const apiPrivate = axios.create({
  baseURL: "http://localhost:5000/api", 
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer `,
  },
});

export default apiPrivate;
