import React from "react";
import { useWeatherContext } from "../context/WeatherProvider";

function Weather() {
  const {city} = useWeatherContext();

  return (
    <>
    {
      city?console.log(city.location):"..loading"
    }
    </>
  );
}

export default Weather;
