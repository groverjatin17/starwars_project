import client from "./swapiClient";

const getPeople = () => client.get("/people");

export default {
  getPeople,
};
