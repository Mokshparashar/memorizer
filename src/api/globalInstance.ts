import axios from "axios";

export const globalInstance = axios.create({
  withCredentials: true,
  baseURL: "https://memorizer-backbone.onrender.com",

  // baseURL: "http://localhost:8000",

  headers: {
    "Content-Type": "Application/json",
  },
});
