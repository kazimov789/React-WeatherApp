import React from "react";
import { useWeatherContext } from "../context/WeatherProvider";

function Search() {
  const { SetSearch } = useWeatherContext();
  const inputHandler = (e) => {
    SetSearch(e.target.value);
  };
  return (
    <>
      <input type="text" onChange={inputHandler} />
    </>
  );
}

export default Search;
