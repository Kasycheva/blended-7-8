// Створіть контейнер div (з класом numberContainer )в HTML-документі та динамічно створіть 100 блоків (з класом number) наповнивши їх рандомними числами від 1 до 100 і додайте їх до контейнера div(numberContainer). Парні числа повинні мати зелений фон (додати клас even), Непарні числа - жовтий фон (додати клас odd).

const divContainer = document.createElement('div');

divContainer.classList.add('number-container');

const randomNumber = () => Math.floor(Math.random() * 100) + 1;

for (let index = 0; index < 100; index++) {
  const div = document.createElement('div');
  div.classList.add('number');
  div.textContent = randomNumber();

  if (div.textContent % 2 === 0) {
    div.classList.add('even');
  } else {
    div.classList.add('odd');
  }
  divContainer.appendChild(div);
}
console.log(divContainer);

const body = document.body;
// body.append(divContainer); в низ боді
body.prepend(divContainer);
// body.after(divContainer); після боді
// body.before(divContainer); перед боді

// task 2
// Створи HTML список фільмів на основі масиву під назвою films. Користувач обожнює дивитися кіно, дивиться його часто, тому при вході на сторінку він хоче бачити, які фільми вже були переглянуті, а до яких він ще не добрався. Вперу чергу зарендери фільми на сторінку, використовуй допоміжну функцію createMarkup(), яка буде повертати розмітку. Додай розмітку на сторінку задопомогою insertAdjacentHTML() і тільки після цього зроби елементи фільмів (li), які вже були переглянуті напівпрозорими (opacity: 0.5). Для цього використовуй масив унікальних id фільмів, знайди на сторінці елементи у яких id дорівнює тому id фільма, який користувач вже перелянув аби саме їх зробити напівпрозорими.

const films = [
  {
    title: 'Tetris',
    imgUrl: 'https://static.hdrezka.ac/i/2023/3/20/f509264b419fdmu53x38j.jpg',
    id: 'film_1',
  },
  {
    title: 'Avatar: The Way of Water',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/22/tc5e6b8212683gn66r84s.jpg',
    id: 'film_2',
  },
  {
    title: 'Operation Fortune: Ruse de guerre',
    imgUrl: 'https://static.hdrezka.ac/i/2022/2/11/s0d53f6cf0ae0tq29m85l.jpg',
    id: 'film_3',
  },
  {
    title: 'Babylon',
    imgUrl: 'https://static.hdrezka.ac/i/2022/12/25/z330b47a82209ww99w55a.jpg',
    id: 'film_4',
  },
  {
    title: 'The Whale',
    imgUrl: 'https://static.hdrezka.ac/i/2023/2/24/h23d8c65d734akd89q94c.jpg',
    id: 'film_5',
  },
];

function createMarkup(array) {
  return array
    .map(
      ({ id, imgUrl, title }) =>
        `<li id="${id}">
          <img src="${imgUrl}" alt="${title}" />
          <p>${title}</p>
          </li>`
    )
    .join('');
}

const filmsList = document.querySelector('.films-list');
filmsList.insertAdjacentHTML('afterbegin', createMarkup(films));