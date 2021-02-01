import React from 'react';
import { Header } from '../components/Header/Header';
import { Airport } from '../components/Airport/Airport.jsx';

export const HomePage = () => {
  return (
    <>
      <Header />
      <div>Home Page</div>
      <Airport />
    </>
  );
};
