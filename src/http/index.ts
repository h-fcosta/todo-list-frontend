import axios from "axios";

const http = axios.create({
  baseURL: "https://todo-list-backend-lac.vercel.app/",
  headers: {
    Accept: "application/json",
    Content: "application/json",
  },
});

export default http;
