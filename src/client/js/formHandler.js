async function handleSubmit(event) {
    event.preventDefault()
    
    
    let input_city = document.getElementById('city_input').value;
    let input_date = document.getElementById('dateStandard').value;

    console.log(input_date)
    
    
    let howManyDays = await Client.getDays(input_date)

    // get my private geonames username, weather and pixabay API
    const GeoNameUsername = await Client.getGeoUsername()
    const weather_API_KEY = await Client.getWeatherAPIKey()
    const pixabay_API_KEY = await Client.getPixabayKey()
    
    try {
        // Request the coordinates from the user's inputted city
        Client.getCoordinatesFromAPI(GeoNameUsername, input_city)
            .then(function(data) {
                // post the data into the server's dict
                Client.postCoordinates('http://localhost:8800/addCoordinates', {lng: data.geonames[0].lng, lat: data.geonames[0].lat})
                    .then(function() {
                        // first get the coordinates and then get the information from the weather api with the coordinates as input.
                        Client.getCoordinatesFromServer()
                            .then(function(coordinates){
                                Client.getWeather(weather_API_KEY, coordinates.lat, coordinates.lng, howManyDays)
                                    .then(function(weather) {
                                        Client.postWeather('http://localhost:8800/addWeather', {date: weather.data[0].datadatetime, temp: weather.data[0].temp})
                                            .then(function() {
                                                Client.getPicture(pixabay_API_KEY, input_city)
                                                    .then(function(picture) {
                                                        Client.postPicture('http://localhost:8800/addPicture', { picture: picture.hits[0].webformatURL })
                                                            .then(function(){
                                                                updateUI()
                                                            });
                                                        })
                                                })
                                        })
                                    })
                                })
                            })
                        } catch (error) {
                            console.log("error", error)
                        }
}



/* Function to GET all the data */
const updateUI = async () => {
    const first = await fetch('http://localhost:8800/getWeatherData');
    const second = await fetch('http://localhost:8800/getPictureData');
    try{
        const temperature = await first.json();
        const picture = await second.json();
        document.getElementById('date').innerHTML = document.getElementById('dateStandard').value;
        // capitalize every word in the string: https://www.digitalocean.com/community/tutorials/js-capitalizing-strings
        document.getElementById('city').innerHTML = document.getElementById('city_input').value.trim().replace(/^\w/, (c) => c.toUpperCase());
        document.getElementById('picture').src = picture.picture;
        document.getElementById('temp').innerHTML = 'Expected temperature: ' + temperature.temp;
    }catch(error){
        console.log("error", error);
    }
}



export { handleSubmit }
export { updateUI }