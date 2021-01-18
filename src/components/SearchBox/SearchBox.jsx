import React from "react";
import { AWFetch } from "../../utils/AviationWeather/AWapi";

export const SearchBox = () => {
  return(
    //   Temporary implementation for development purposes
    <>
    <AWFetch ICAO="LKPR" />
    </>
  )
}