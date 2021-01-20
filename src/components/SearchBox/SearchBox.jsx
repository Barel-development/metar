import React, { useState } from "react";
import { InputText } from 'primereact/inputtext';
//Following import may be useful for future testing, delete after it becomes obsolete.
// import { AWFetch } from "../../utils/AviationWeather/AWapi";

export const SearchBox = () => {
  const [search, setSearch] = useState('');
  return (
    <>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          // Not sure if in future development the trigger for render will be onChange od onKeyPress or anything else.
          // Direct call of AWFetch function was there for testing purpose. In reality the call will have to be handled by useEffect hook in Metar conmponent.
          // onKeyPress={(e) => ((e.key === 'Enter') && AWFetch(search))}
          placeholder="ICAO code" />
      </span>
    </>
  )
}