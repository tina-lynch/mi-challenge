// import "@babel/polyfill";
// import "@babel/core";
import { dateToday } from "./utils.js";
import { getRegion } from './regionCall.js';



const inputZip = document.querySelector('.zip-container input#zip');
const submitZip = document.querySelector('.zip-container input#submit');
let date = dateToday();
// date = '01/28/2021';



getRegion(inputZip.value.slice(0, 5), date);


submitZip.addEventListener('click', (e) => {
  e.preventDefault();

  if (inputZip.value.length >= 5) {
    document.querySelector('.loader').classList.remove('hide'); // turn loader on
    document.querySelector('h2').remove();
    document.querySelector('#app ul').innerHTML = '';

    getRegion(inputZip.value.slice(0, 5), date);
  }
})

