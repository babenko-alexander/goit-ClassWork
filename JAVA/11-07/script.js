'use strict';

/*const options = {
    weekday: 'long',
    year    : 'numeric',
    month   : 'short',
    day     : 'numeric',
    hour    :'2-digit',
    minute  :'2-digit'
};
//
// Україна
let localeUa = date.toLocaleString('UA-ua', options);
console.log(localeUa); // понеділок, 19 бер. 2018 р., 17:42

let localeUs = date.toLocaleString("en-US", options);
console.log(localeUs); // Monday, Mar 19, 2018, 5:43 PM*/


// --------------------------------------------------------------------------------


/*let year = prompt('Enter year');
let month = prompt('Enter month');
let day = prompt('Enter day');
// let dateLine = day + ',' + month + ',' + year;
// console.log(year);
// console.log(day);

let days =['Неділя','Понеділок','Вівторок','Середа','Четвер','Пятниця','Субота'];

// let date = new Date(`${year}, ${month}, ${day}`);
let date = new Date(day + ',' + month + ',' + year);
console.log(days[date.getDay()]);*/


// --------------------------------------------------------------------------------


// const deadline = new Date ('1, january, 2019');
const deadline = new Date (2019, 0, 1, 0, 0, 0);

const secCounter = document.querySelector('.seconds');
const minCounter = document.querySelector('.minutes');
const hourCounter = document.querySelector('.hours');
const dayCounter = document.querySelector('.days');


function timer() {
    const today = new Date();
    let result = deadline - today;
    let secs = Math.floor(result / 1000);
    let mins = Math.floor(secs / 60);
    let hours = Math.floor(mins / 60);
    let days = Math.floor(hours / 24);

    secs = secs % 60;
    mins = mins % 60;
    hours = hours % 24;

    secCounter.textContent = secs < 10 ? `0${secs}` : secs;
    minCounter.textContent = mins < 10 ? `0${mins}` : mins;
    hourCounter.textContent = hours < 10 ? `0${hours}` : hours;
    dayCounter.textContent = days  < 10 ? `0${days}` : days;

}

setInterval(timer, 1000);






