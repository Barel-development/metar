import React, { useEffect, useState } from 'react';
import { AWFetch } from '../../utils/AviationWeather/AWapi.js';
import { Metar } from './airportComponents/Metar/Metar.jsx';
import { AirportMap } from '../Airport/airportComponents/AirportMap/AirportMap.jsx';
import './airport.css';

export const Airport = (props) => {
  const call = props.call === '' ? 'LKPR' : props.call;

  const [data, setData] = useState('');
  const [airportOpened, setAirportOpened] = useState(false);

  useEffect(() => {
    AWFetch(call).then((data) => setData(data));
  }, [call]);

  return (
    <section className="airportRow">
      <div className="airportInfo">
        <button
          className={
            airportOpened ? 'airportBtn airport--opened' : 'airportBtn'
          }
          onClick={() => {
            setAirportOpened(!airportOpened);
          }}
        ></button>

        {airportOpened && <AirportMap />}
      </div>
      {/* {console.log(data) && <div>{data.data[0].station.name}</div>} */}
      <div className="metarDiv">
        <Metar />
      </div>
    </section>
  );
};
