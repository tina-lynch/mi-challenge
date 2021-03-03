import imgs from '../img/*.png';

const renderCity = (cityData) => {
    const { city, region } = cityData;
    const heading = document.createElement('h2');
    const container = document.querySelector('#app .container')

    heading.innerHTML = `<h2>WEATHER FORECAST FOR ${city.toUpperCase() || ''}, ${region.toUpperCase() || ''}</h2>`
    container.insertBefore(heading, container.childNodes[0]);

    //remove loader
    document.querySelector('.loader').classList.add('hide');
}



const renderForecast = (forecastData) => {
    const { time, icon, summary, temperatureHigh, temperatureLow } = forecastData;
    const ul = document.querySelector('#app ul')
    const newItem = document.createElement('li');

    newItem.innerHTML = `<h4 class="date">${time || ''}: </h4>
        <div class="container">
        <img src="${imgs[icon] || ''}" alt="${icon}"> 
        <div class="forecast">
            <p>${summary || 'Please try again later'}</p>
            <p><span>${temperatureHigh || ''}*</span> / ${temperatureLow || ''}* F</p>
        </div>
        </div>
        `
    ul.appendChild(newItem)
}





exports.renderForecast = renderForecast;
exports.renderCity = renderCity;