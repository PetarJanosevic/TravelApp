import { handleSubmit } from './js/formHandler'
import { getCoordinatesFromAPI } from './js/getCoordinatesFromAPI'
import { getCoordinatesFromServer } from './js/getCoordinatesFromServer'
import { getDays } from './js/getDays'
import { getGeoUsername } from './js/getGeoUsername'
import { getPicture } from './js/getPicture'
import { getPixabayKey } from './js/getPixabayKey'
import { getWeather } from './js/getWeather'
import { getWeatherAPIKey } from './js/getWeatherAPIKey'
import { postCoordinates } from './js/postCoordinates'
import { postPicture } from './js/postPicture'
import { postWeather } from './js/postWeather'
import './styles/bootstrap.scss'
import './styles/stylesheet.scss'

// this codes makes sure that the user can't enter a past date. 
const today = new Date().toISOString().split('T')[0];
document.getElementById("dateStandard").setAttribute('min', today);

export {
    handleSubmit,
    getCoordinatesFromAPI,
    getCoordinatesFromServer,
    getDays,
    getGeoUsername,
    getPicture,
    getPixabayKey,
    getWeather,
    getWeatherAPIKey,
    postCoordinates,
    postPicture,
    postWeather
}
