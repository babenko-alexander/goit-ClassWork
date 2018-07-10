'use strict';

/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой.
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Используйте делегирование.
*/

/*let list = document.querySelector('.list');
let arrBtn = Array.from(document.querySelectorAll('button'));
let arrLi = Array.from(document.querySelectorAll('li'));
console.log(arrBtn);

function delLi (e) {
    // console.log(arrBtn.indexOf(e.target));
    // arrLi[arrBtn.indexOf(e.target)].style.display = 'none';
    arrLi[arrBtn.indexOf(e.target)].remove();
}

// list.addEventListener('click', delLi);
arrBtn.forEach(el => el.addEventListener('click', delLi));*/


// -------------------------------------------------------------------------------

/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все
  инпуты проверяли свое содержимое на правильное количество символов.

  Сколько символов должно быть в инпуте, указывается в атрибуте data-length.
  Если введено подходящее количество, то outline инпута становится зеленым,
  если неправильное - красным.
*/


/*let inpArr = Array.from(document.querySelectorAll('[type = text]'));
console.log(inpArr);

function check (e) {
    console.log(e);
    console.log(this.value.length);
    console.log(this.dataset.length);
    (this.value.length <= +this.dataset.length) ? this.style.outline = '3px solid green' : this.style.outline = '3px solid red';
}

inpArr.map(el => el.addEventListener('focusout', check));*/


// -------------------------------------------------------------------------------


/*
  Напишите скрипт который:

    - При фокусе текстового поля, в консоль выводит строку "Input is in focus!"
    - При наборе текста в текстовое поле (событие input), текущее его значение должно
      отображаться в абзаце с классом input-value
*/

/*let inp = document.querySelector('.input');
let par = document.querySelector('.input-value');

function alert () {
    // par.textContent += 'Input is in focus!';
    console.log('Input is in focus!');
}

function inpVal () {
    par.textContent = 'Current input value: ' + inp.value;
}

inp.addEventListener('focus', alert);
inp.addEventListener('input', inpVal);*/


// -------------------------------------------------------------------------------

/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.

  Напишите скрипт который реализует следующее поведение:

  - При клике на кнопке с надписью "Open Modal"
    и классом js-open-modal, модальное окно с классом modal,
    должно появляться, тобишь необходимо убрать класс modal-hidden.
    Для выбора модального модального окна используйте класс js-modal-backdrop

  - При открытом модальном окне, клик на кнопку с крестиком (js-close-modal)
    или на серый фон с прозрачностью (js-modal-backdrop),
    модальное окно должно закрываться.


  Задание повышеной сложности:
  - Попробуйте реализовать плагин функционала модального окна используя класс.
    При создании экземпляра необходимо передать селекторы для кнопки закрытия окна
    и самого прозрачного фона. Плагин должен реализовавать два метода show и hide,
    либо один toggle.

    При клике на кнопку показа модального окна должен вызываться
    метод show или toggle. Соответственно при для закрытия
    окна hide либо toggle.
*/


let btn = document.querySelector('.js-open-modal');
let modal = document.querySelector('.js-modal-backdrop');
let closingBtn = document.querySelector('.js-close-modal');


function removeHiding () {
    modal.classList.remove('modal-hidden');
}

function closeModal (e) {
    if (e.target === this) {
        modal.classList.add('modal-hidden');
    }
}

btn.addEventListener('click', removeHiding);
modal.addEventListener('click', closeModal);
closingBtn.addEventListener('click', closeModal);

