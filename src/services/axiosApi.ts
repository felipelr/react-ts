import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://localhost:5001",
});

export default axiosApi;
