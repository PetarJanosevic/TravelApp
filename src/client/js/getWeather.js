/* Function to GET coordinate data from geoname API*/
const getWeather = async(key, lat, lng, over7Days) => {
    //if(over7Days){
    //    let info = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?lat=${lat}&lon=${lng}&days=1&key=${key}`);
    //} else {
    //    let info = await fetch(`https://api.weatherbit.io/v2.0/forecast/hourly?lat=${lat}&lon=${lng}&key=${key}`);
    //}
    const daily = `daily`;
    const hourly = `hourly`;
    const info = await fetch(`https://api.weatherbit.io/v2.0/forecast/${over7Days? daily : hourly}?lat=${lat}&lon=${lng}&days=1&key=${key}`);
    try {
        const weatherData = await info.json();
        return weatherData;
    } catch (error) {
        console.log("error", error);
    }
};

export { getWeather }



