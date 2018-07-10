'use strict';


let cont = document.querySelector('.cont');

let bodyPaste = document.querySelector('body');
function gallery(e) {
    console.log(e.target.dataset.big); // data-big => dataset.big
    let overlay = document.createElement('div');
    let img = document.createElement('img');
    img.classList.add('big-img');
    overlay.classList.add('overlay');
    img.setAttribute('src', e.target.dataset.big);
    img.setAttribute('alt', 'picture');
    overlay.append(img);
    bodyPaste.prepend(overlay);
    overlay.addEventListener('click', function () {
        if (event.target === this){
            this.remove();
        }
    })

}
cont.addEventListener('click', gallery);



let galleryArr = [
    {small: 'https://placeimg.com/480/240/animals', big: 'https://placeimg.com/960/480/animals'},
    {small: 'https://placeimg.com/480/240/arch', big: 'https://placeimg.com/960/480/arch'},
    {small: 'https://placeimg.com/480/240/nature', big: 'https://placeimg.com/960/480/nature'},
    {small: 'https://placeimg.com/480/240/people', big: 'https://placeimg.com/960/480/people'},
    {small: 'https://placeimg.com/480/240/tech', big: 'https://placeimg.com/960/480/tech'},
    {small: 'https://placeimg.com/480/240/animals/grayscale', big: 'https://placeimg.com/960/480/animals/grayscale'},
    {small: 'https://placeimg.com/480/240/tech/sepia', big: 'https://placeimg.com/960/480/tech/sepia'},
    {small: 'https://placeimg.com/480/240/people/sepia', big: 'https://placeimg.com/960/480/people/sepia'},
    {small: 'https://placeimg.com/480/240/arch/sepia', big: 'https://placeimg.com/960/480/arch/sepia'},
    {small: 'https://placeimg.com/480/240/nature/grayscale', big: 'https://placeimg.com/960/480/nature/grayscale'},
];

function createTemp (arr) {
    let result = arr.reduce((acc, el) => acc + `<img src=${el.small} alt='picture' data-big=${el.big}>`, '');
    cont.innerHTML = result;
}

function galleryConstructor (arr) {
    const frag = document.createDocumentFragment();
    for (let item of arr) {
        let img = document.createElement('img');
        img.setAttribute('src', item.small);
        img.setAttribute('data-big', item.big);
        img.setAttribute('alt', 'picture');
        frag.append(img);
    }
    cont.append(frag);
}

// galleryConstructor (galleryArr);
createTemp (galleryArr);

