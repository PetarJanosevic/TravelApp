const dotenv = require('dotenv');
dotenv.config();

var path = require('path');
const express = require('express');

const geoUsername = process.env.GEO_USERNAME
const weather_APIKEY = process.env.WEATHER_API_KEY
const pixabay_APIKEY = process.env.PIXABAY_API_KEY

const app = express()

/* Dependencies */
const bodyParser = require('body-parser');

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
const cors = require('cors');
app.use(cors());

app.use(express.static('dist'))

console.log(__dirname)

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
});

// designates what port the app will listen to for incoming requests
app.listen(8000, () => {
    console.log('Example app listening on port ', 8000)
});

// function to get the api username
app.get('/getGeoNameUsername', function (req, res) {
    res.send(geoUsername)
});

// GET weather API-key
app.get('/weather-api-key', function (req, res) {
    res.send(weather_APIKEY);
});

// GET pixabay API-key
app.get('/pixabay-api-key', function (req, res) {
    res.send(pixabay_APIKEY);
});

// Callback function to complete GET '/getCoordinates'
app.get('/getCoordinates', function (req, res) {
    res.send(cityCoordinates);
});

// Callback function to complete GET '/getCoordinates'
app.get('/getWeatherData', function (req, res) {
    res.send(weatherData);
});

// Callback function to complete GET '/getCoordinates'
app.get('/getPictureData', function (req, res) {
    res.send(pictureData);
});

// POST Route which adds incoming coordinates to cityCoordinates
app.post('/addCoordinates', function (req, res){
    newEntry = {
            lng: req.body.lng,
            lat: req.body.lat
        }
        cityCoordinates = newEntry;
  res.send(cityCoordinates);
});

// POST Route which adds incoming weater information to predictedWeatherData
app.post('/addWeather', function (req, res){
    newEntry = {
            date: req.body.date,
            temp: req.body.temp
        }
        weatherData = newEntry;
  res.send(weatherData);
});

// POST Route which adds a pixabay picture on website
app.post('/addPicture', function (req, res){
    pictureData = {
        picture: req.body.picture
    };
  res.send(pictureData);
});


module.exports = { app };
