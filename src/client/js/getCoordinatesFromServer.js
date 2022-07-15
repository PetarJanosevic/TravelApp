// get the weather API key from server js
const getCoordinatesFromServer = async () => {
    const response = await fetch('http://localhost:8800/getCoordinates');
    try {
        const coordinates = await response.text()
        return JSON.parse(coordinates);
    } catch (error) {
        console.log("error", error);
    }
};

export { getCoordinatesFromServer }