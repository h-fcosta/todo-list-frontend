import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    Accept: "application/json",
    Content: "application/json",
  },
});

export default http;
