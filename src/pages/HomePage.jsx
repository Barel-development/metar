import React, { useState } from 'react';
import { Header } from '../components/Header/Header';
import { Airport } from '../components/Airport/Airport.jsx';

export const HomePage = () => {
  const [icao, setIcao] = useState('');

  function handleChangeICAO(newValue) {
    setIcao(newValue);
  }

  return (
    <>
      <Header icao={icao} onChange={handleChangeICAO} />
      <div className="homepageDiv">
        <Airport call={icao} />
      </div>
    </>
  );
};
