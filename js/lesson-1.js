//* Розгалуження: if, if...else, else...if
//TODO: 1 ===================================
//Даний рядок, що складається із символів, наприклад, 'abcde'.
// Перевірте, що першим символом цього рядка є буква 'a'.
// Якщо це так - виведіть 'так', інакше виведіть 'ні'.
// const str = 'Abcde';
// if (str.toLocaleLowerCase().startsWith('a')) {
//     console.log('yes'); 
// } else {
//   console.log('no');   
// }
// str.toLocaleLowerCase()[0] === 'a' ? console.log('yes') : console.log('no');

//TODO: 2 ===================================
// Написати скрипт, який перевіряє чи введене число через prompt потрапляє в діапазон від 55 до 99 включно.
// Якщо так, вивести в консоль "Число потрапляє в діапазон".
// Якщо ні, вивести в консоль "Число не потрапляє в діапазон".

// const number = 77;

// function checkNum (insideNum){
// let message = "Число не потрапляє в діапазон";
// const min = 55;
// const max = 99;

// if (insideNum >= min && insideNum <= max){
// 	message = "Число потрапляє в діапазон";
// }

// return message;

// }

// console.log(checkNum (number));

//TODO: 3 ===================================
// Є 3 вікові групи : діти (0-16), дорослі(17-60), пенсіонери (61-100).
// До якої групи відноситься Максим, якщо йому 55 років.Назву групи вивести на екран.

// const age = +prompt('your age: ')


// function checkAge (funkAge) {
// let message = 'Error';

// if (funkAge <= 16 && funkAge >= 0){
// 	message = 'You are a child'
// }else if (funkAge <= 60 && funkAge >= 17){
// 	message = 'You are a adult'
// }else if (funkAge <= 100 && funkAge >= 61){
// 	message = 'You are almost old))'
// }

// return message;

// }

// console.log(checkAge (age));