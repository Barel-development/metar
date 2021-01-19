import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
import { AWFetch } from "../../utils/AviationWeather/AWapi";

export const SearchBox = () => {
  const [search, setSearch] = useState('');
  return (
    <>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyPress={(e) => ((e.key === 'Enter') && AWFetch(search))}
          placeholder="ICAO code" />
      </span>
    </>
  )
}