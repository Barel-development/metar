import React, { useEffect, useState } from 'react';
import { AWFetch } from '../../utils/AviationWeather/AWapi.js';
import { Metar } from '../Metar/Metar.jsx';

export const Airport = (props) => {
  const call = props.call === '' ? 'LKPR' : props.call

  const [data, setData] = useState('')

  useEffect(() => {
    AWFetch(call).then((data) => setData(data))
  }, [call]);

  return (
    <>
      {console.log(data) && (<div>{data.data[0].station.name}</div>)}
      <Metar />
    </>
  );
};