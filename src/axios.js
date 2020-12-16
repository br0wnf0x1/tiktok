import axios from "axios";

const instance = axios.create({
  baseURL: "https://tiktok-mern-backend-prime.herokuapp.com/",
  // "http://localhost:9000",
});

export default instance;
