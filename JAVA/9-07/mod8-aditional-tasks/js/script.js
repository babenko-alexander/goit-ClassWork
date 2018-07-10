'use strict';

/*
  Напишите скрипт который реализует следующий функционал.

  Есть кнопка с классом button, текст которой отображает
  кол-во раз которое по ней кликнули, обновляется при каждом клике.
*/

/*
let body = document.querySelector('body');
let btn = document.createElement('button');
let counter = 0;

btn.textContent = counter;
body.append(btn);

function fnc() {
    counter++;
    btn.textContent = counter;
}

btn.addEventListener('click', fnc);
*/


//-------------------------------------------------------------------------

/*
  Даны 2 инпута, абзац и кнопка. По нажатию на кнопку
  получите числа стоящие в инпутах и запишите их сумму в абзац.
*/

/*
let btn = document.querySelector('#btn');
let par = document.querySelector('#par');

// let sum = +a.value + +b.value;


function func(e) {
    e.preventDefault();
    let a = document.querySelector('#a');
    let b = document.querySelector('#b');

    let sum = +a.value + +b.value;
    // par.insertAdjacentText('beforeend', sum);
    par.textContent = sum;
}

btn.addEventListener('click', func);
*/


//-------------------------------------------------------------------------

/*
  Дан спан и кнопки +1, -1, которые будут увеличивать
  и уменьшать на 1 значение спана. Сделайте так, чтобы
  это значение не могло стать меньше нуля.
*/

/*let span = document.querySelector('#span');
let btnP = document.querySelector('#btnPlus');
let btnM = document.querySelector('#btnMinus');

function funInc() {
    span.textContent = +span.textContent + 1;
}

function funDec() {
    (+span.textContent !== 0) ? span.textContent = +span.textContent - 1 : null;
}

btnP.addEventListener('click', funInc);
btnM.addEventListener('click', funDec);
*/

//-------------------------------------------------------------------------


/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа,
  после чего нажимает кнопку "Send" и происходит отправка формы.

  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в абзац с классом .result
*/


/*let btn = document.querySelector('.btn');
let res = document.querySelector('.result');


function func(e) {
    e.preventDefault();
    let checkArr = Array.from(document.querySelectorAll('[type = radio]'));
    let checked = checkArr.find(el => el.checked);
    res.textContent = 'Result: ';
    res.textContent += checked.value;
}


btn.addEventListener('click', func);*/

//-------------------------------------------------------------------------

/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку
  алертом выводился ее src. Используйте делегирование.
*/


let ul = document.querySelector('.images');

function func (e) {
    alert(e.target.src);
}

ul.addEventListener('click', func);
