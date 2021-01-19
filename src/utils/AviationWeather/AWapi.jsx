import React, { useState } from 'react';

export const AWFetch = (ICAO) => {
    const [value, setValue] = useState({})

    fetch(`https://api.checkwx.com/metar/${ICAO}/decoded`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'X-API-Key': process.env.REACT_APP_API_KEY
              },
        })
            .then((response) => response.json())
            .then((data) => {
                setValue(data)
            });

    return (
        console.log(value)
    )
};