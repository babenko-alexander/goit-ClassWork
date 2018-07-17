'use strict';

/*
const source = document.querySelector('#address-template').innerHTML.trim();
// console.log(source);
const temp = Handlebars.compile(source);
// console.log(temp);

const context = {
    "city": "London",
    "street": "Baker Street",
    "number": "221B"
};

const markup = temp(context);
console.log(markup);
const container = document.querySelector('.content-placeholder');
container.innerHTML = markup;
*/



/*const source2 = document.querySelector('#example-template').innerHTML.trim();
const temp2 = Handlebars.compile(source2);

const data = {
    people: [
        {firstName: 'Homer', lastName: 'Simpson'},
        {firstName: 'Peter', lastName: 'Griffin'},
        {firstName: 'Eric', lastName: 'Cartman'},
        {firstName: 'Kenny', lastName: 'McCormick'},
        {firstName: 'Bart', lastName: 'Simpson'}
    ],
};

const person = temp2(data);
const container2 = document.querySelector('.content-placeholder');
container2.innerHTML = person;*/



/*const menuSource = document.querySelector('#menu').innerHTML.trim();
const tempMenu = Handlebars.compile(menuSource);

const menuData = {
    title: 'Eat it createElement, templates rule!',
    items: ['Handlebars', 'LoDash', 'Pug', 'EJS'],
};

const menuMarkup = tempMenu(menuData);
// console.log(info);
const menuContainer = document.querySelector('#menu-container');
menuContainer.innerHTML = menuMarkup;*/



/*const data = {
    animals:[
        {
            name: "cow",
            noise: "moooo"
        },
        {
            name: "cat",
            noise: "meow"
        },
        {
            name: "fish",
            noise: ""
        },
        {
            name: "farmer",
            noise: "Get off my property!"
        }
    ]
};


const source = document.querySelector('#built-in-helpers-template').innerHTML.trim();
const template = Handlebars.compile(source);
const result = template(data);
const container = document.querySelector('.content-placeholder');
container.innerHTML = result;*/



/*const gallery = {
    title: 'Gallery',
    items: [
        {img: 'https://placeimg.com/300/150/animals', text: 'animals'},
        {img: 'https://placeimg.com/300/150/arch', text: 'architecture'},
        {img: 'https://placeimg.com/300/150/nature', text: 'nature'},
        {img: 'https://placeimg.com/300/150/people', text: 'people'},
        {img: 'https://placeimg.com/300/150/tech', text: 'tech'},
        {img: 'https://placeimg.com/300/150/any', text: 'random'}
    ]
}

const sourceTemp = document.querySelector('#example-template').innerHTML.trim();
const templateGal = Handlebars.compile(sourceTemp);
const resultGal = templateGal(gallery);
const container = document.querySelector('.gallery-content');
container.innerHTML = resultGal;*/


let dataPhones = {
    phones: [
        {
            id: "1",
            categoryId: "1",
            name: "Apple iPhone 5c",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 823,
            image: "uploads/iphone5c-selection-hero-2013.png",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "2",
            categoryId: "1",
            name: "Apple iPhone 6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 953,
            image: "uploads/51u6y9Rm8QL._SY300_.jpg",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "3",
            categoryId: "4",
            name: "Lenovo A6000",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 764,
            image: "uploads/_35%20(1).JPG",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "4",
            categoryId: "5",
            name: "Nokia Lumia 1520",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 674,
            image: "uploads/Lumia1520-Front-Back-png.png",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "5",
            categoryId: "3",
            name: "HTC One",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 674,
            image: "uploads/htc-one-m7-802w-dual-sim-silver.jpg",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        },
        {
            id: "6",
            categoryId: "2",
            name: "Samsung Galaxy S6",
            description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam ultricies lorem odio, at laoreet tellus sodales in. Nullam maximus eros ut tortor ultricies rutrum. Aliquam euismod lacus non est egesta",
            price: 674,
            image: "uploads/Agnes_Case_for_Samsung_Galaxy_S6_(1)__92643_thumb.jpg",
            cpu: "1.3GHz Apple A6",
            camera: "8mp (3264x2448)",
            size: "124.4mm x 59.2mm x 8.97mm (4.9 x 2.33 x 0.35)",
            weight: "132 grams (4.7 ounces) with battery",
            display: "4.0 326 pixel density",
            battery: "1480 mAh",
            memory: "16GB, 32GB and RAM 1 GB"
        }
    ]
};


// -----------------------------------------------------------------------------------------------------------------------------

const dataLaptops = {
    laptops: [
        {
            size: 13,
            color: 'white',
            price: 28000,
            releaseDate: 2015,
            name: 'Macbook Air White 13"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 13,
            color: 'gray',
            price: 32000,
            releaseDate: 2016,
            name: 'Macbook Air Gray 13"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 13,
            color: 'black',
            price: 35000,
            releaseDate: 2017,
            name: 'Macbook Air Black 13"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 15,
            color: 'white',
            price: 45000,
            releaseDate: 2015,
            name: 'Macbook Air White 15"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 15,
            color: 'gray',
            price: 55000,
            releaseDate: 2016,
            name: 'Macbook Pro Gray 15"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 15,
            color: 'black',
            price: 45000,
            releaseDate: 2017,
            name: 'Macbook Pro Black 15"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 17,
            color: 'white',
            price: 65000,
            releaseDate: 2015,
            name: 'Macbook Air White 17"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 17,
            color: 'gray',
            price: 75000,
            releaseDate: 2016,
            name: 'Macbook Pro Gray 17"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
        {
            size: 17,
            color: 'black',
            price: 80000,
            releaseDate: 2017,
            name: 'Macbook Pro Black 17"',
            img: 'http://demo.posthemes.com/pos_zadademo/images/placeholder.png',
            descr:
                'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, beatae.',
        },
    ]
};

// -----------------------------------------------------------------------------------------------------------------------------

/*const source = document.querySelector('.template-card').innerHTML.trim();
const template = Handlebars.compile(source);
const result = template(dataPhones);
const container = document.querySelector('.content-placeholder');
container.innerHTML = result;

const seeMoreArr = Array.from(document.querySelectorAll('.module-card-button'));
const descrArr = Array.from(document.querySelectorAll('.descr'));


seeMoreArr.map(el => el.addEventListener('click', seeInfo));

function seeInfo(e) {
    seeMoreArr.some((el, ind) => {
        if (e.target === el) {
            descrArr[ind].classList.toggle('description');
        }
    })
}*/

// -----------------------------------------------------------------------------------------------------------------------------


const source = document.querySelector('.template-card').innerHTML.trim();
const template = Handlebars.compile(source);
// const result = template(dataLaptops);
let container = document.querySelector('.content-placeholder');
// container.innerHTML = result;

const disp13 = document.querySelector('#disp13');
const disp15 = document.querySelector('#disp15');
const disp17 = document.querySelector('#disp17');

let laptop13 = {};
laptop13.laptops = dataLaptops.laptops.filter(el => el.size === 13);

let laptop15 = {};
laptop15.laptops = dataLaptops.laptops.filter(el => el.size === 15);

let laptop17 = {};
laptop17.laptops = dataLaptops.laptops.filter(el => el.size === 17);


let form = document.querySelector('.check-form');


form.addEventListener('input', constructList);

function constructList() {
    // let frag = document.createDocumentFragment();
    let frag = "";
    if (disp13.checked === true) {
        frag += template(laptop13);
    }
    if (disp15.checked === true) {
        frag += template(laptop15);
    }
    if (disp17.checked === true) {
        frag += template(laptop17);
    }
    container.innerHTML = frag;
}





/*
        let checkedPart = dataLaptops.laptops.filter(el => el.size == e.target.value);
        console.log(checkedPart);
        for (let item of checkedPart) {
            if (!frag.includes(item)) {
                console.log(item);
                frag.push(item);
            }
        }
        console.log(frag);
    }
*/


