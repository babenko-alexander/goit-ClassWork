/*function sumArg() {
    console.log(arguments);
    // arguments = 1, 5, 9, 12, 1, 100;
    // return arguments;
    // console.log(arguments[1]);
    // let arr = Array.from(arguments);
    // console.log('Array arguments', arr);
    // let sum = '';
    // for (let item of arr) {
    //     sum += item + ' ';
    // }
    // return sum;
}

//
console.log(sumArg(1, 5, 9, 12, 1, 100.56));
console.log(sumArg(5, 9));*/




/*function secretPassword() {
    let password = 'xh38sk';

    function guessPassword(guess) {
        if (guess === password) {
            return true;
        } else {
            return false;
        }
    }

    return guessPassword;
}

let passwordGame = secretPassword();
// console.log(passwordGame);
let tryOne = passwordGame('heyisthisit?');
let tryTwo = passwordGame('xh38sk');
// console.log(tryOne);
// console.log(tryTwo);*/




/*function counter() {
    let count = 0;
    function increment() {
        count +=1;
        return count;
    }
    return increment;
}
let user1 = counter();
console.log(user1);
let first = user1();
let user2 = counter();
let user2First = user2();
let user2Second = user2();
let user2Third = user2();
let user2Fourth = user2();
console.log('first user counter',first);
console.log('second user counter',user2Fourth);*/



// const pow = (base, exponent) => {
//     if (exponent === 0) return 1;
//
//     return base * pow(base, exponent - 1);
// };
//
// const pow = (2,3) =>{
//     if (3 === 0 ) return 1;
//     return 2 * pow(2,2) => {
//         if (2 === 0 ) return 1;
//         return 2 * pow(2,1) => {
//             if (1 === 0 ) return 1;
//             return 2 * pow(2,0) => {
//                 if (0 === 0 ) return 1;
//             }
//         }
//     }
// }


/*
let fak = function(base) {
    if (base === 0) return 1;
    return base * fak(base - 1);
}

console.log(fak(15));
*/


/*
// Написати ф-ю що приймає аргументом строку формата '160px' і вертає строку формата '10rem'

let rem = (a) => `${parseFloat(a) / 16}rem`;

console.log(rem('160px')); // 10rem
console.log(rem('16px')); // 1rem
console.log(rem('80px')); // 5rem
console.log(rem('8px')); // 0.5rem
*/


/*
// написати ф-ї що приймає 2 параметра (розмір елемента і розмір контейнера) і повертає розмір елемента в %

let prc = (el, cont) => `${parseFloat(el) / parseFloat(cont) * 100}%`;

console.log(prc('160px','1600px')); // 10%
console.log(prc('16px','1600px')); // 1%
console.log(prc('80px','1600px')); // 5%
console.log(prc('8px','1600px')); // 0.5%
*/



/*
// Написаьи ф-ю що приймає 3 параметра:
// 1) Розмір елемента - string
// 2) Розмір контейнера - string
// 3 ) одиниці виміру в які треба конвертувати - 'rem' or 'prc'

let convert = function(el, cont, units) {
    if (units === 'rem') {
        return `${parseFloat(el) / 16}rem`;
    } else if (units === 'prc') {
        return `${parseFloat(el) / parseFloat(cont) * 100}%`;
    } else  {
        return 'Input error';
    }
}
console.log(convert('160px', null, 'rem')); // 10rem
console.log(convert('160px', '1600px', 'prc')); // 10%
*/



/*
let convert = function(el, cont, units) {
    switch (units) {
        case 'rem':
              return `${parseFloat(el) / 16}rem`;
        case 'prc':
            return `${parseFloat(el) / parseFloat(cont) * 100}%`;
        default:
            return 'Input error';
    }
}

console.log(convert('160px', null, 'rem')); // 10rem
console.log(convert('160px', '1600px', 'prc')); // 10%
console.log(convert('160px', '1600px')); // 'Input error'
*/


// Написати функцію яка питає користувача яку валюту він має і в яку хоче перевести
// вказує суму і на основі курса виводиться готова сума.
// UAH, EUR, USD
// 1)Запит яку валюту має
// 2)Запит в яку валюту хоче перевести
// 3)Запит яка сума для конвертації
// 4) В замиканні зберегти 6 курсів валют
// 5) 6 перевірок в залежності від валют виводити кінцпеву суму
// 6) Перетворити введену валюту до єдиного формату
// 7) Перевірка на ціле і додатнє число.
//8 ) alert вивести суму яку він отримає.



