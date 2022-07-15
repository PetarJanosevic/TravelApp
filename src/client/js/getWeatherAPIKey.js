// get the weather API key from server js
const getWeatherAPIKey = async () => {
    const response = await fetch('http://localhost:8800/weather-api-key');
    try {
        const apiKEY = await response.text()
        return apiKEY
    } catch (error) {
        console.log("error", error);
    }
}


export { getWeatherAPIKey }