import React, { useEffect } from 'react';

export const AWFetch = (props) => {

    useEffect(() => {
        fetch(`https://api.checkwx.com/metar/${props.ICAO}/decoded`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'X-API-Key': process.env.REACT_APP_API_KEY
              },
        })
            .then((response) => response.json())
            .then((data) => {
                console.log(data)
            });
    }, []);

    return (
        <div>"ahoj"</div>
    )
};