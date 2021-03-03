import { forecastCall } from './forecastCall.js';
import { renderCity } from './render.js';


export const getRegion = (zip, date) => {
    fetch('https://se-weather-api.herokuapp.com/api/v1/geo?zip_code='+zip)
        .then((resp) => resp.json())
        .then((data) => {
                let { city, region, latitude, longitude } = data;
               
                latitude = String(Math.round(latitude *100)/100);
                longitude = String(Math.round(longitude *100)/100);
                               
                let cityData = {city, region, latitude, longitude}

                renderCity(cityData)
                forecastCall(cityData, date)
        })
        .catch(error => console.log(error));
};

