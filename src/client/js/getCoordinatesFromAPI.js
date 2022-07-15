/* Function to GET coordinate data from geoname API*/
const getCoordinatesFromAPI = async(key, city) => {
    const info = await fetch(`http://api.geonames.org/searchJSON?formatted=true&maxRows=1&q=${city}&username=${key}`);
    try {
        const data = await info.json();
        return data;
    } catch (error) {
        console.log("error", error);
    }
};

export { getCoordinatesFromAPI }