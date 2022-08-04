import client from "./swapiClient";

const getFilms = () => client.get("/films");

export default {
  getFilms,
};
