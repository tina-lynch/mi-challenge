import { renderForecast } from './render.js';
import { dayString } from "./utils.js";


export const forecastCall = (cityData, date) => {
    let { latitude, longitude } = cityData;

    fetch(`https://se-weather-api.herokuapp.com/api/v1/forecast?latitude=${latitude}&longitude=${longitude}&date=${date}`)
        .then((resp) => resp.json())
        .then((data) => {
            // slice data to first 3 items 
            data.daily.data.slice(0,3).map((val) => {  // console.log(val)
                let { icon, summary, temperatureHigh, temperatureLow, time } = val;
              
                //shorten summary, removes "throughout the day."
                summary = summary.substr(0, summary.length-20);
                
                // convert unixtime to day of week, check if 'today' for first <li>
                const dayNumber = new Date((time) * 1000).getDay();
                new Date(new Date()).getDay() === dayNumber ? time = 'Today' : time = dayString(dayNumber)


                let forecastData = {icon, summary, temperatureHigh, temperatureLow, time}
                renderForecast(forecastData);
            })
               
        })
        .catch(error => console.log(error));
};
