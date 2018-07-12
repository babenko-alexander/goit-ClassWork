'use strict';


/*
const req = new XMLHttpRequest();
// console.log(req);
// settings
// req.open(method, URL, async);
req.open('GET', 'https://jsonplaceholder.typicode.com/users', false);
req.setRequestHeader('Content-Type', 'application/json');
// req.send([body])
req.send();

// req.abort()

// status
// https://developer.mozilla.org/ru/docs/Web/HTTP/Status

if (req.status !== 200) {
    console.error(`${req.status}: ${req.statusText} `)
} else {
    console.log(JSON.parse(req.response));
}
console.log(`test`);



const req = new XMLHttpRequest();
req.open('GET', 'https://jsonplaceholder.typicode.com/users', true);
req.setRequestHeader('Content-Type', 'application/json');
req.send();
req.onreadystatechange = function () {
    if (req.readyState !== 4) {
        console.log(req.readyState);
        return
    }

    if (req.status !== 200) {
        console.error(`${req.status}: ${req.statusText} `)
    } else {
        console.log(JSON.parse(req.response));
    }
};
//
//
console.log(`test`);

let id = 152;
fetch(url,{
    method: 'DELETE',
    body: JSON.stringify(id),
    headers: new Headers({
        'Content-Type': 'application/json',
    }),
});*/


/*
let div = document.querySelector('.container');
fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => {
    if (response.ok) {
        return response.json()
    }
})
.then(data => data.map(el => el.email))
.then(mapResult => mapResult.sort((a,b) => a > b))
.then(sortRes => createUl(sortRes, div))
.catch(error => console.log(error));

function createUl (arr, cont) {
    let res = arr.reduce((acc, el) => acc + `<li>${el}</li>`, '');
    let list = `<ul>${res}</ul>`;
    cont.innerHTML = list;
}*/


// .then(data => console.log(data));


/*
let url = 'https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&category=backgrounds&order=popular&per_page=9';
let div = document.querySelector('.container');
let frag = document.createDocumentFragment();

fetch(url)
    .then(response => {
        if (response.ok) {
            return response.json()
        }
    })
    .then(data => data.hits)
    .then(data => data.map(el => el.largeImageURL))
    .then(images => {
        for (let item of images) {
            let img = document.createElement('img');
            img.setAttribute('src', item);
            img.classList.add('img');
            frag.append(img);
        }
        div.append(frag);
    })
    .catch(error => console.log(error));*/

// --------------------------------------------------------------------------------------

let btn = document.querySelector('.btn');
let galleryCont = document.querySelector('#container');

function galleryCreate(arr, cont) {
    let result = arr.reduce((acc, el) => acc + `<div class="one"><p>Photographer is ${el.user}</p><img src=${el.webformatURL}></div>`, '');
    cont.innerHTML = result;
}

function getValue() {
    let input = document.querySelector('.cars').value;
    let url = `https://pixabay.com/api/?key=5018958-ed49ccd90878e6614abdf24a6&q=${input}&per_page=30`;
    document.querySelector('.cars').value = '';
    fetch(url)
        .then(response => response.ok ? response.json() : null)
        .then(data => data.hits)
        .then(galleryArr => galleryCreate(galleryArr, galleryCont))
        .catch(error => console.log(error));
}


btn.addEventListener('click', getValue);
window.addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getValue();
    }
});

// --------------------------------------------------------------------------------------





