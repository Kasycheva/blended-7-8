// ! Масиви і функції
//TODO:=========task-01=================
// Створіть масив styles з елементами «Джаз» та «Блюз».
// Додайте "Рок-н-рол" в кінець.
// Замініть значення "Блюз" на "Класика".
// Видалить перший елемент масиву і виведіть його в консоль.
// Вставте «Реп» і «Реггі» на початок масиву.

// const styles = ['Джаз', 'Блюз'];
// styles.push('Рок-н-рол');
// styles.shift();
// // styles[1] = 'Класика';
// styles.unshift('Реп', 'Реггі');
// const index = styles.indexOf('Блюз');
// console.log(index);
// if (index !== -1) {
//   styles[index] = 'Класика';
// }
// // console.log(styles);
// // for (const style of styles) {
// //   console.log(style);
// // }
// for (let index = 0; index < styles.length; index++) {
//   console.log(`${index + 1} : ${styles[index]}`);
// }

//TODO:=========task-02=================
// Знайти всі елементи масиву, що містять задану підстроку, та об'єднати їх у новий масив, після чого вивести у консоль лог повідомлення "Масив елементів, що містять підстроку substring: ..." .Результат повинен бути розділений комами та пробілами.(використати indexOf)

const stringArray = ['JavaScript', 'HTML', 'CSS', 'React'];
const substring = 'S';

// const newStringArray = [];
// for (const element of stringArray) {
//   if (element.includes(substring)) {
//     newStringArray.push(element);
//   }
// }
// console.log(
//   `Масив елементів, що містять підстроку ${substring} : ${newStringArray.join(
//     ', '
//   )}`
// );

// другий варіант - рішення не досконале, виводить css 2 рази (пофіксили в другому if)

// function findLetter(arr, letter) {
//   const insideArr = [];
//   for (const item of arr) {
//     item.split('');
//     for (let i = 0; i < item.length; i += 1) {
//       if (item[i].includes(letter)) {
//         if (insideArr.includes(item)) {
//           continue;
//         }
//         insideArr.push(item);
//       }
//     }
//   }
//   return insideArr;
// }
// console.log(findLetter(stringArray, substring));

//!  Літерал об'єкта
//!  Властвості та методи об'єкта
//TODO:============task-01=========================
// Створіть об'єкт "людина" з властивостями "ім'я", "хобі" і "вік". Напишіть метод "greet", який буде виводити на екран привітання з ім'ям людини.
// Послідовно:
// 1 додати поле mood зі значенням 'happy'
// 2 замінити hobby на 'skydiving'

// const human = {
//   userName: 'Mango',
//   hobby: 'football',
//   age: 75,
//   greet() {
//     console.log(`Hello, ${this.userName}`);
//   },
// };

// console.log(human.userName);

// console.log(human["age"]);

human.greet();

human.mood = 'happy';
human.hobby = 'skydiving';

//console.log(human);

// for (const key in human) {
//   console.log(key);
//   console.log(human[key]);
// }

// console.log(Object.keys(human));
// console.log(Object.values(human));
// console.log(Object.entries(human));

// const salaries = {
//   Denis: 3000,
//   Alisa: 3500,
//   Mykola: 4000,
// };

// let total = 0;

// // for (const key in salaries) {
// //   total += salaries[key];
// // }

// const values = Object.values(salaries);
// for (const item of values) {
//   total += item;
// }

// console.log(total);

//TODO:============task-2==============================
// Створіть масив об'єктів "студентів" з властивостями "ім'я", "прізвище" та "середній бал".
// Напишіть функцію "findTopStudent", яка буде повертати об'єкт студента з найвищим середнім балом.

// const students = [
//   { name: 'Андрій', surname: 'Іванов', grade: 5 },
//   { name: 'Олександр', surname: 'Петров', grade: 3.9 },
//   { name: 'Марія', surname: 'Сидорова', grade: 3.2 },
//   { name: 'Ірина', surname: 'Федорова', grade: 4.2 },
//   { name: 'Микола', surname: 'Пупкін', grade: 4.8 },
// ];

// function findTopStudent(students) {
//   let topStudentGrade = students[0];

//   const topStudents = [];

//   for (const student of students) {
//     if (student.grade > topStudentGrade.grade ) {

//       topStudentGrade = student;
//       topStudents.push(student);

//     }
//   }
//   return topStudents;
// }

// console.log(findTopStudent(students));

// ! Рішення

const students = [
  { name: 'Андрій', surname: 'Іванов', grade: 5 },
  { name: 'Олександр', surname: 'Петров', grade: 3.9 },
  { name: 'Марія', surname: 'Сидорова', grade: 5 },
  { name: 'Ірина', surname: 'Федорова', grade: 4.2 },
  { name: 'Микола', surname: 'Пупкін', grade: 4.8 },
];
function findTopStudents(students) {
  let maxGrade = students[0].grade;

  // Знайти максимальну оцінку серед усіх студентів
  for (const student of students) {
    if (student.grade > maxGrade) {
      maxGrade = student.grade;
    }
  }

  // Створити масив студентів з максимальною оцінкою
  const topStudents = [];
  for (const student of students) {
    if (student.grade === maxGrade) {
      topStudents.push(student);
    }
  }

  return topStudents;
}

// }
console.log(findTopStudents(students));


// Друге рішення (Денис)
function findTopStudent(studentsInside){
let total = 0;
const arr = [];

//знаходимо максимальний бал
const maxArr = [];
for (let i = 0; i < studentsInside.length; i+=1){
	maxArr.push(studentsInside[i].grade)
}
const max = Math.max(...maxArr);

for(const student of studentsInside){
	if (student.grade >= total){
		total = student.grade
		if (student.grade >= max){
			arr.push(student)
		}
	}
}
return arr
}

console.log(findTopStudent(students));