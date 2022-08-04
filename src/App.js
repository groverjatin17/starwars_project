// import "./styles.css";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import filmsApi from "./api/films";
import useApi from "./utils/useApi";
import Select from "./tcsComponents/select";
import Loader from "./tcsComponents/loader";

export default function App() {
  const getFilmsApi = useApi(filmsApi.getFilms);

  useEffect(() => {
    getFilmsApi.request();
  }, []);
  const selectedPeople = useSelector(
    (state) => state.starWarsReducers.selectedPeople
  );
  const filteredFilms = getFilmsApi.data?.results.filter((film) =>
    film.characters.includes(selectedPeople)
  );

  const latestFilm = filteredFilms && filteredFilms[filteredFilms?.length - 1];

  return (
    <div style={{marginLeft: "100px"}}>
      <div>
        <Select />
      </div>
      <div style={{ display: "flex" }}>
        <div>
          <h1>Films</h1>
          {getFilmsApi.loading && <Loader />}
          {getFilmsApi.error && <p>{getFilmsApi.error}</p>}
          <ul>
            {filteredFilms?.map((film) => (
              <li key={film?.title}>{film?.title}</li>
            ))}
          </ul>
        </div>
      </div>
      <div>
        <b>Latest Movie is</b> <br />
        <p>{latestFilm?.title}-{latestFilm?.release_date.substring(0,4)}</p>
      </div>
    </div>
  );
}
