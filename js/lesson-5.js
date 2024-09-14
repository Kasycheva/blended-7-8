import { refs } from './helpers/refs.js';
import {
  addDataToLocalStorage,
  getDataFromLocalStorage,
} from './helpers/localstorage-api.js';
import { lsKey } from './helpers/keys.js';

refs.checkbox.addEventListener('click', onClick);
document.addEventListener('DOMContentLoaded', renderPage);

function onClick(event) {
  console.log(event.target.checked);
  if (event.target.checked) {
    refs.body.classList.replace('light', 'dark');
    addDataToLocalStorage(lsKey, 'dark');
  } else {
    refs.body.classList.replace('dark', 'light');
    addDataToLocalStorage(lsKey, 'light');
  }
}
function renderPage() {
  const lsData = getDataFromLocalStorage(lsKey);
  if (lsData === 'dark') {
    refs.body.classList.replace('light', 'dark');
    refs.checkbox.checked = true;
  } else {
    refs.body.classList.replace('dark', 'light');
  }
}

const currentDate = new Date()
const month = currentDate.toLocaleDateString("uk-UA", {month:"long"});
const day = currentDate.toLocaleDateString("uk-UA", {day: "numeric"});
const weekDay = currentDate.toLocaleDateString("uk-UA", {weekday: "long"});
const year = currentDate.toLocaleDateString("uk-UA", {year: "numeric"});

refs.month.textContent = month;
refs.day.textContent = day;
refs.weekDay.textContent = weekDay;
refs.year.textContent = year;

//age-calculator

refs.ageButton.addEventListener('click', calculateAge);

function calculateAge (){
	const userDate = new Date(refs.ageInput.value);
	const currentDate = new Date();
	const different = currentDate - userDate;

	const result = getAge(different)
	refs.ageResult.textContent = `Your age is ${result} years old`
}

function getAge(ms){
return Math.floor(ms/(1000 * 60 * 60 * 24 * 365.25))
}

// setTimeout(()=>{
// console.log(1);

// }, 1000)

// setTimeout(()=>{
// 	console.log(2);
	
// }, 500);

// setTimeout(()=>{
// 	console.log(4);
	
// }, 0);

// console.log(3);


/**
 * - Використовуй prompt і повертай значення звідти.
 * - Створи функцію, всередині якої буде проміс.
 * Якщо значення не є числом, відхиляй проміс і логіруй "error".
 * Якщо значення парне, вирішуй проміс і повертай "even" через 1 секунду.
 * Якщо значення не парне, вирішуй проміс і повертай "odd" через 2 секунди.
 */

const value = prompt('past value');

function checkValue (valueInner){
return new Promise((resolve, reject) => {
	if(isNaN(valueInner)){
		return reject("error")
	}
	if (valueInner % 2 === 0){
		setTimeout(()=>{
			return resolve("even")
		}, 1000)
	}
	setTimeout(()=>{
		return resolve("odd")
	}, 2000)
})
}

checkValue (value).then(response => {
	console.log(response)
}).catch(error => {
	console.log(error)
})