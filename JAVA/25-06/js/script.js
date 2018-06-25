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


// Написати ф-ю що приймає аргументом строку формата '160px' і вертає строку формата '10rem'


let rem = (a) => `${parseFloat(a) / 16}rem`;



console.log(rem('160px')); // 10rem
console.log(rem('16px')); // 1rem
console.log(rem('80px')); // 5rem
console.log(rem('8px')); // 0.5rem


