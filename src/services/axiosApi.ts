import axios from "axios";

const axiosApi = axios.create({
  baseURL: "http://localhost:5001",
});

export default axiosApi;
