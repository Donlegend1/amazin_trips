// utils/axios.js
import axios from "axios";

const instance = axios.create({
  baseURL: "https://localhost:7178/api",
});

export default instance;
