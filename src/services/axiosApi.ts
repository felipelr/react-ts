import axios from "axios";

const axiosApi = axios.create({
  baseURL: "https://www.strabbrasil.com/wsdev/api",
});

export default axiosApi;
