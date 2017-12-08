/**
 * Created by Superstar on 08.12.2017.
 */
import axios from 'axios'

const API_KEY = 'a3362c7a5ee6000749c6e172c75551c3'
const ROOT_URL = `http://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`

export const FETCH_WEATHER = 'FETCH_WEATHER'

export function fetchWeather(city) {
    const url = `${ROOT_URL}&q=${city},pl`
    const request = axios.get(url)

    return {
        type: FETCH_WEATHER,
        payload: request
    }
}