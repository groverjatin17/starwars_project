import { useState, useEffect } from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useDispatch } from "react-redux";
import Loader from "./loader";

import peopleApi from "../api/people";
import useApi from "../utils/useApi";

export default function BasicSelect() {
  const [people, setPeople] = useState("");
  const getPeopleApi = useApi(peopleApi.getPeople);

  useEffect(() => {
    getPeopleApi.request();
  }, []);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setPeople(event.target.value);
    dispatch({
      type: "SELECTED_PEOPLE",
      payload: event.target.value,
    });
  };

  return (
    <>
      <div>
        <div>
          <h1>People</h1>
          {getPeopleApi.loading && <Loader />}
          {getPeopleApi.error && <p>{getPeopleApi.error}</p>}
        </div>
      </div>
      <Box sx={{ width: 250 }}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">Characters</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={people}
            label="People"
            onChange={handleChange}
          >
            {getPeopleApi.data &&
              getPeopleApi.data?.results?.map((people) => (
                <MenuItem key={people.name} value={people.url}>{people.name}</MenuItem>
              ))}
          </Select>
        </FormControl>
      </Box>
    </>
  );
}
