import React from 'react';
import { Navbar } from './headerComponents/Navbar.jsx';
import './header.css';
import { SearchBox } from '../SearchBox/SearchBox.jsx';

export const Header = (props) => {
  return (
    <div className="header">
      <span className="logo">METAR</span>
      <SearchBox icao={props.icao} onChange={props.onChange} />
      <Navbar />
    </div>
  );
};
