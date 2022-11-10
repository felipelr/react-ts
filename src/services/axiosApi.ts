import axios from "axios";

const axiosApi = axios.create({
  //baseURL: "https://www.strabbrasil.com/wsdev/api",
  baseURL: "http://localhost:5001",
});

export default axiosApi;
