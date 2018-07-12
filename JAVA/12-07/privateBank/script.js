'use strict';


/*let btn = document.querySelector('.btn');
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
});*/


let btn = document.querySelector('.btn');
let exchangeCont = document.querySelector('.container');
let frag = document.createDocumentFragment();


function getExchange() {
    let url = 'https://api.privatbank.ua/p24api/pubinfo?exchange&json&coursid=11';

    fetch(url)
        .then(resp => resp.ok ? resp.json() : null)
        // .then(data => console.log(data));
        .then(data => tableCreate(data))
        .catch(error => console.log(error));


}

function tableCreate(arr) {
    for (let el of arr) {
        let ul = document.createElement('ul');
        let li0 = document.createElement('li');
        let li1 = document.createElement('li');
        let li2 = document.createElement('li');

        li0.textContent = `Exchanging ${el.base_ccy} to ${el.ccy}`;
        li1.textContent = `Buy: ${el.buy}`;
        li2.textContent = `Sale: ${el.sale}`;

        ul.append(li0);
        ul.append(li1);
        ul.append(li2);
        frag.append(ul);
    };
    exchangeCont.append(frag);
}

btn.addEventListener('click', getExchange);



