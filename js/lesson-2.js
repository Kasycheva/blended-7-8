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

function findLetter(arr, letter) {
  const insideArr = [];
  for (const item of arr) {
    item.split('');
    for (let i = 0; i < item.length; i += 1) {
      if (item[i].includes(letter)) {
        if (insideArr.includes(item)) {
          continue;
        }
        insideArr.push(item);
      }
    }
  }
  return insideArr;
}
// console.log(findLetter(stringArray, substring));
