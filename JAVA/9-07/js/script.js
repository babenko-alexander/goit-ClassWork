'use strict';


// const html = document.documentElement;
// console.log(html);
// const body = document.body;
// console.log(body);
// console.log(body.childNodes);
// console.log(body.children);
// console.log(body.firstChild);
// console.log(body.firstElementChild);
// console.log(body.lastChild);
// console.log(body.lastElementChild);
// const div = body.children[0];
// console.log(div);
// console.log(div.children);
// console.log(div.lastElementChild);
// console.log(div.lastChild);
// const p = div.children[1];
// console.log(p);
// console.log(p.previousElementSibling);
// console.log(p.previousSibling);
// console.log(p.nextElementSibling);
// console.log(p.nextSibling);
// console.log(p.parentNode);


/*
  Есть список категорий с классом categories (на вкладке HTML).

  Напишите код, который для каждого элемента li (первая вложенность)
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li

  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/


/*
let category = document.querySelector('.categories');
let listArr = Array.from(category.children);

// console.log(category.children[0].textContent.trim());

listArr.map(el => console.log(`Категория = ${el.firstChild.textContent}, количество влож.лишек ${el.firstElementChild.children.length}`));

// console.log(listArr[0].firstElementChild.children.length);
*/


//-------------------------------


/*
  Дан список с классом .list
	- Найдите первого потомка списка и сделайте его текст красного цвета
	- Найдите последнего потомка списка и сделайте его текст синего цвета
*/


/*let list = document.querySelector('.list');
list.firstElementChild.style.color = 'red';
list.lastElementChild.style.color = 'blue';*/

//-------------------------------

/*
Дан ul склассом .list и массив строк.

Вставьте элементы этого массива в ul так, чтобы каждый элемент стоял в своем li.
*/


/*
const elements = ['HTML', 'CSS', 'JavaScript', 'React', 'NodeJS'];

let list = document.querySelector('.list');
const frag = document.createDocumentFragment();

for (let el of elements) {
    const liItem = document.createElement('li');
    liItem.textContent = el;
    frag.append(liItem);
}
list.append(frag);
*/


//-------------------------------


/*
  Напишите скрипт для создания списка ul.

  Для каждого пункта:
    - Запрашивайте содержимое пункта li у пользователя с помощью prompt.
    - Создавайте пункт и добавляйте его к ul.
    - Процесс прерывается, когда пользователь нажимает Cancel.
    - Все элементы списка должны создаваться динамически.
*/


/*
let list = document.createElement('ul');
let txt;
do  {
    txt = prompt('Enter list text');
    if (txt !== null) {
        document.querySelector('.cont').append(list);
        let liItem = document.createElement('li');
        liItem.textContent = txt;
        list.append(liItem);
    }
} while (txt !== null);
*/

//-------------------------------


/*let createCard = function () {

    let body = document.querySelector('body');
    let card = document.createElement('div');
    let cardImg = document.createElement('img');
    let cardHeader = document.createElement('h2');
    let cardPar = document.createElement('p');
    let cardLink = document.createElement('a');

    card.classList.add('post');
    cardImg.classList.add('post__image');
    cardHeader.classList.add('post__title');
    cardPar.classList.add('post__text');
    cardLink.classList.add('button');

    cardImg.setAttribute('src', 'http://via.placeholder.com/400x150');
    cardImg.setAttribute('alt', 'post image');
    cardLink.setAttribute('href', '#');

    cardHeader.textContent = 'Lorem ipsum dolor';
    cardPar.textContent = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!';
    cardLink.textContent = 'Read more';

    body.append(card);
    card.append(cardImg);
    card.append(cardHeader);
    card.append(cardPar);
    card.append(cardLink);
}

createCard();
createCard();*/

//---------------------------------------------------------------------------------------


/*
В HTML-документе уже есть тег с id="root" (вкладка HTML)

Создайте функцию createBoxes(num), которая принимает 1 параметр num - число.

    Функция создает столько div, сколько указано в num и возвращает их в одном
общем контейнере. После чего необходимо повесить результат работы функции
в div с id="#root"

Каждый div:
    - Имеет случайный rgb цвет фона
- Размеры самого первого div - 30px на 30px.
- Каждый следующий div после первого, должен быть шире и выше предыдущего
на 10px
*/


let rootDiv = document.querySelector('#root');
let frag = document.createDocumentFragment();
let createBoxes = function (num) {
    for (let i = 0; i < num; i++) {
        let div = document.createElement('div');
        let r = Math.floor(Math.random() * 256);
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);

        div.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
        div.style.width = `${30 + 10 * i}px`;
        div.style.height = `${30 + 10 * i}px`;

        frag.append(div);
    }
    return frag;

};
rootDiv.append(createBoxes(10));


//---------------------------------------------------------------------------------------




