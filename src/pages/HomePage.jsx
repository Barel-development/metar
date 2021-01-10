import { React } from 'react';
import { NavBar } from '../components/NavBar/NavBar';
import { Airport } from '../components/Airport/Airport.jsx';

export const HomePage = () => {
  return (
    <>
      <NavBar />
      <div>Home Page</div>
      <Airport />
    </>
  );
};
