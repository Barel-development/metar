import React, { useState, useEffect } from 'react';

export const AWFetch = (props) => {
    
    useEffect(() => {
        console.log("log1")
        fetch(`https://www.aviationweather.gov/adds/dataserver_current/httpparam?datasource=metars&requestType=retrieve&format=xml&mostRecentForEachStation=constraint&hoursBeforeNow=3&stationString=${props.ICAO}`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'text/xml'
              },
        })
            .then((response) => console.log(response))
            // .then((response) => response.json())
            // .then((data) => {
            //     console.log(data)
            //     setXml(() => data)
            // });
    }, []);

    return (
        <div>"ahoj"</div>
    )
};