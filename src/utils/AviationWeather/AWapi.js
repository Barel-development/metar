export const AWFetch = (ICAO) => {
    return Promise.resolve(
        fetch(`https://api.checkwx.com/metar/${ICAO}/decoded`, {
            method: 'GET',
            mode: 'cors',
            headers: {
                'X-API-Key': process.env.REACT_APP_API_KEY
            },
        })
            .then((response) => response.json())
)
};