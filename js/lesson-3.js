//! Callback
//TODO:============task-01=========================
// Напишіть функцію, яка приймає два числа і колбек-функцію. Функція повинна помножити числа між собою та передати результат дії до колбек-функції. Колбек-функція повинна, у разі, якщо, це число є парним - помножити це число на себе, якщо ні - взяти квадратний корінь з цього числа, та вивести результат у консоль лог.

// const result = performOperation(20, 40, callbackFunction);
// console.log(result);

//! Array methods
//TODO:=========task-01=================
// Дано масив чисел [1, 2, 3, 4, 5]. Створіть новий масив, що містить квадрати кожного елементу вхідного масиву. Очікуваний результат: [1, 4, 9, 16, 25].

// const res = getNewArray([1, 2, 3], 5);
// console.log(res);

//TODO:=========task-02=================
// Дано масив об'єктів {id: 1, values: [1, 2, 3]}, {id: 2, values: [4, 5, 6]}, {id: 3, values: [7, 8, 9]}. Створіть новий масив, що містить всі значення з масивів values кожного об'єкту, збережених в одному масиві. Очікуваний результат: [1, 2, 3, 4, 5, 6, 7, 8, 9].

// const data = [
//   { id: 1, values: [1, 2, 3] },
//   { id: 2, values: [4, 5, 6] },
//   { id: 3, values: [7, 8, 9] },
// ];

// const res = flatArray(data);
// console.log(res);

//TODO:=========task-03=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Перевірте, чи є хоча б один об'єкт з віком менше 20 років. Очікуваний результат: true.

// const people = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const res = checkAge(people);
// console.log(res);

//TODO:=========task-04=================
//  Дано масив чисел [2, 4, 6, 8, 10]. Перевірте, чи є кожен елемент масиву парним. Очікуваний результат: true.

// const numbers = [2, 4, 6, 8, 10];

// const res = checkEvenArray(numbers);
// console.log(res);

//TODO:=========task-05=================
// Дано масив чисел [1, 2, 3, 4, 5]. Знайдіть перший елемент, більший за 3. Очікуваний результат: 4.

// const numbers = [1, 2, 3, 4, 5];

// const res = getNumber(numbers);
// console.log(res);

//TODO:=========task-06=================
// Відсортуйте масив чисел [4, 2, 5, 1, 3] у порядку зростання. Очікуваний результат: [1, 2, 3, 4, 5].

// const numbersArray = [4, 2, 5, 1, 3];

// const res = sortedArray(numbersArray);
// console.log(res);

//TODO:===============task-07===============================
// Відсортуйте масив рядків ["banana", "orange", "apple", "pear"] у порядку алфавіту. Очікуваний результат: ["apple", "banana", "orange", "pear"].

// const stringArray = ['banana', 'orange', 'apple', 'pear'];

// const res = sortedArray(stringArray);
// console.log(res);

//TODO:=========task-08=================
// Дано масив об'єктів {name: "John", age: 27}, {name: "Jane", age: 31}, {name: "Bob", age: 19}. Створіть новий масив, що містить тільки об'єкти, в яких вік більше 20 років. Очікуваний результат: [{name: "John", age: 27}, {name: "Jane", age: 31}]

// const user = [
//   { name: 'John', age: 27 },
//   { name: 'Jane', age: 31 },
//   { name: 'Bob', age: 19 },
// ];

// const res = getAge(user, 25);
// console.log(res);

//TODO:=========task-10=================
// Дано масив чисел [1, 2, 3, 4, 5]. Застосуйте метод reduce для обчислення суми елементів масиву

// const numbers = [1, 2, 3, 4, 5];

// const res = sum(numbers);
// console.log(res);

//* Модуль 6. Заняття 12. Прототипи та класи
//TODO:=========task-01=================
/**
 * Створи клас для калькулятора, який має такі методи:
 * - метод number, який набуває початкового значення для наступних операцій
 * - метод getResult, який повертає фінальний результат усіх операцій, проведених із числом
 * - методи add, substruct, divide, multiply
 * Об'єкт класу може проводити послідовні операції у вигляді ланцюжка
 */

// const calculator = new Calculator();
// console.log(calculator);

// const res = calculator
//   .number(10)
//   .add(10)
//   .divide(2)
//   .multiply(4)
//   .substruct(5)
//   .getResult();

// console.log(res);

// const res2 = calculator
//   .number(20)
//   .substruct(40)
//   .multiply(-8)
//   .divide(160)
//   .add(20)
//   .getResult();

// console.log(res2);

//! Приватні властивості
//TODO:=========task-02=================
/**
 * Напиши клас Client який створює об'єкт з ​​властивостями login email.
 *
 * Оголоси приватні властивості #login #email, доступ до яких зроби через геттер та сеттер login email
 */

// const client = new Client('Mango', 'mango@gmail.com');

// client.changeEmail = 'mango555@gmail.com';
// console.log(client.getEmail);
// client.changeLogin = '12345';
// console.log(client.getLogin);

//! Практика наслідування у класах.
//TODO:=========task-03=================
/**
  |============Person================
  | Cтворіть клас `Person`, який містить наступні властивості:
  |  - `name` - ім'я людини;
  |  - `age`- вік людини;
  |  - `gender` - стать людини;
  |  - `email`- електронна пошта людини.
  |
  | ##### Крім того, клас `Person` має мати метод `getDetails()`, який повертає об'єкт з ім'ям, віком, статтю та електронною поштою людини.
  |============================
*/

// const person = new Person('John', 30, 'male', 'john@hmail.com');

// console.log(person.getDetails());

/**
  |=============Employee===============
  |Створіть клас `Employee`, який розширює клас `Person` і містить наступні властивості:
  |  - salary - зарплата співробітника;
  |  - department - відділ, в якому працює співробітник.
  |  ##### Крім того, клас `Employee` має мати метод `getEmployeeDetails()`, який повертає об'єкт з ідентифікатором співробітника, зарплатою та відділом, в якому працює співробітник.
  |============================
*/

// const employee = new Employee(
//   5000,
//   'developer',
//   'Bob',
//   45,
//   'male',
//   'bob@hmail.com'
// );
// console.log(employee.getEmployeeDetails());
