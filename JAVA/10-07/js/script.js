'use strict';

/*
2 ) Написати скрипт який буде рахувати загальну вартість мяса і виводити її на екран
3) При змінні данних в інпуті №1 чи №2 автоматично має перераовуватися загальна вартість
4) Завжди має відображатися валюта - гривня
5) Загальна сума відображається з копійками (2 знаки після коми)
6) В підписі другого інпута має бути кольорова підказка скільки кілограм вибрав користувач на другому інпуті.
7) Кольрова підказка має змінювати своє значення при перетягувані повзунка.
8) В інпуті №2 мін і мах поріг встановлюєте самостійно.
9) При завантаженні сторінки скрип має автоматично розрахувати вартість на основі данних за замовчуванням які ви встановите в розмітці.
*/


/*let form = document.querySelector('.form');
let priceTotal = document.querySelector('.total');
let amount = document.querySelector('.amount');

function totalPrice () {
    let priceInp = document.querySelector('#price').value;
    let quantInp = document.querySelector('#quantity').value;
    let sum = priceInp * quantInp;
    priceTotal.textContent = `${sum.toFixed(2)} грн`;
    amount.textContent = quantInp;
}

form.addEventListener('input', totalPrice);
window.addEventListener('DOMContentLoaded', totalPrice);*/


// -------------------------------------------------------------

/*1) Створити в HTML 5 кнопок
2) Написати скрипт який при ховері буде міняти позицію кнопок на екрані, щоб не можна було по них клікнути
3) Нова позиція кнопок має бути випадковою
4) Кнопки не повинні виїжати за межі екрану
5) Позиція кнопок має вираховуватися відносно висоти і ширини вікна браузера
6) Переміщення кнопок зробити плавним за допомогою transition
7) Визначати кнопку на якій відбулася подія двома способами:
    7.1) event
7.2) this
8) Корисні команди:
    window.innerWidth
window.innerHeight
clientHeight
clientWidth
mouseenter*/



/*let btns = document.querySelectorAll('.btn');
// let cont = document.querySelector('.container');

function mooveBtn (e) {
    // let top = Math.floor(Math.random() * (window.innerHeight - e.target.clientHeight));
    let top = Math.floor(Math.random() * (window.innerHeight - this.clientHeight));
    // let left = Math.floor(Math.random() * (window.innerWidth - e.target.clientWidth));
    let left = Math.floor(Math.random() * (window.innerWidth - this.clientWidth));

    // e.target.style.top = `${top}px`;
    this.style.top = `${top}px`;
    // e.target.style.left = `${left}px`;
    this.style.left = `${left}px`;
}

btns.forEach(el => el.addEventListener('mouseenter', mooveBtn));*/


// -------------------------------------------------------------


/*let list = document.querySelector('.menu');
let listItems = document.querySelectorAll('.menu__item');
let listArr = Array.from(listItems);

let btn = document.querySelector('.btn');

function liClick () {
    alert(listArr.indexOf(event.target) + 1);
}

function liTogle (e) {
    e.target.classList.toggle('togle');
}

function menu () {
    list.classList.toggle('menu__hidden');
}

// list.addEventListener('click', liClick);
list.addEventListener('click', liTogle);

btn.addEventListener('click', menu);*/

// -------------------------------------------------------------





