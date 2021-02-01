import { React } from 'react';
import { Navbar } from './headerComponents/Navbar.jsx';
import './header.css';
import { SearchBox } from '../SearchBox/SearchBox.jsx';

export const Header = () => {
  return (
    <div className="header">
      <span>*METAR</span>
      <SearchBox />
      <Navbar />
    </div>
  );
};
