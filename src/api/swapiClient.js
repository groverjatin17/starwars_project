import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://swapi.dev/api/"
});

export default apiClient;
