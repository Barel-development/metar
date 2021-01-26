import { React } from 'react';
import { Navbar } from './headerComponents/Navbar.jsx';
import './header.css';

export const Header = () => {
  return (
    <div className="header">
      <span>METAR</span>
      <span>SearchBar</span>
      <Navbar />
    </div>
  );
};
