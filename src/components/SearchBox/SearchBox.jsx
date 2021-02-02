import React from "react";
import { InputText } from 'primereact/inputtext';

export const SearchBox = (props) => {
  return (
    <>
      <span className="p-input-icon-left">
        <i className="pi pi-search" />
        <InputText
          value={props.icao}
          onChange={(e) => props.onChange(e.target.value)}
          placeholder="ICAO code" />
      </span>
    </>
  )
}