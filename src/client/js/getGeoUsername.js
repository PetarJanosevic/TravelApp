// get the geoname username from server js
const getGeoUsername = async () => {
    const response = await fetch('http://localhost:8800/getGeoNameUsername');
    try {
        const GeoNameUsername = await response.text()
        return GeoNameUsername
    } catch (error) {
        console.log("error", error);
    }
}


export { getGeoUsername }