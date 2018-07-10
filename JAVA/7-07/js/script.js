'use strict';

const title = document.createElement('h1');
title.textContent = 'Title created from JS';

const container = document.querySelector('div');

container.appendChild(title);

title.classList.add('red');

// title.style.fontSize = '10px';

const article = document.querySelector('article');
container.insertBefore(title, article);

// article.before(title);
// article.after(title);

// document.querySelector('.list').remove();



// inner.HTML

// const div = document.querySelector('div');
// console.log(div);
// div.innerHTML = '<p>Hello World!</p>';
// div.innerHTML += '<p>Hello World!</p>';



// let root = document.querySelector('.container');
// const frag = document.createDocumentFragment();
// for (let i = 0; i < 100; i++) {
//     let box = document.createElement('div');
//     box.classList.add('box');
//     frag.append(box);
// }
// root.append(frag);


// let str = '';
// for (let i = 0; i< 100; i++) {
//     str += '<div class="box"></div>'
// }
// root.innerHTML = str;


const ul = document.querySelector('ul');
const text = '<li>Hello World!</li>';
// ul.insertAdjacentHTML('beforebegin', text); // перед
// ul.insertAdjacentHTML('afterend', text); // після
// ul.insertAdjacentHTML('afterbegin', text); // всередині спочатку
// ul.insertAdjacentHTML('beforeend', text); // всередині вкінці

let body = document.querySelector('body');
let cloneArticle = article.cloneNode(true);
 body.append(cloneArticle);


const one = document.querySelector('#one');
const many = document.querySelector('#many');

function first() {
    alert(`I am action from first button`);
}

function second() {
    alert(`I am action from second button`);

}

function hello() {
    alert(`I am action from second button and hello function`);

}

// one.addEventListener('click', first);


// many.addEventListener('click', first);
// many.addEventListener('click', second);
// many.addEventListener('click', hello);



/*
many.addEventListener('click', function () {
    first();
    second();
    hello();
});

function withRemoveListener() {
    alert(`I am action from first button and i remove after end`);
    one.removeEventListener('click', withRemoveListener);

}

one.addEventListener('click', withRemoveListener);
*/




function clickCount() {
    let clickNumber = 0;
    let limit = 3;
    let fake = clickNumber;
    function increment() {
        fake += 1;
        if (fake > limit) {
            alert('Не балуйся, йди на роботу');
        }
        console.log(clickNumber);
    }

    return increment;
}

let counter = clickCount();
console.log(counter);

let firstButton = document.querySelector('#one');

firstButton.addEventListener('click', counter);



function classAdd() {
    this.classList.toggle('bigBtn');
}

// showThis();

// let one = document.querySelector('#one');

one.addEventListener('click', classAdd);



function showEvent(e) {
    console.log(e);
    // console.log(event.target);
    // console.log(event.currentTarget);
    // console.log(this);
}

// let one = document.querySelector('#one');
one.addEventListener('click', showEvent);

window.addEventListener('keypress', showEvent);


function resizeFont(e) {
    console.log('this',this);
    console.log('target', e.target);
    e.target.classList.toggle('bigText');
}
// bad practice
// let listItem = document.querySelectorAll('.item');
// listItem.forEach(el => el.addEventListener('click', resizeFont));
// console.log(listItem);

// good

let list = document.querySelector('.list');
list.addEventListener('click', resizeFont);




