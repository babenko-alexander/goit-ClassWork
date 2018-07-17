/*
/!*  Перепишите все циклы for используя методы map, filter, find, reduce и т. д. *!/

/!*
  Функция findGreaterThan получает два аргумента - число и массив.
  Возвращает новый массив, содержащий элементы которые больше числа.
*!/

/!*
const findGreaterThan = (num, arr) => {
    const result = [];

    for (let i = 0, max = arr.length; i < max; i += 1) {
        if (arr[i] > num) {
            result.push(arr[i]);
        }
    }

    return result;
};*!/

let findGreaterThen = (num, arr) => arr.filter(item => item > num);

console.log( findGreaterThen(2, [1, 2, 3, 4, 5]) ); // [3, 4, 5,]
console.log( findGreaterThen(3, [1, 2, 3, 4, 5]) ); // [4, 5,]
console.log( findGreaterThen(1, [1, 2, 3, 4, 5]) ); // [2, 3, 4, 5,]



/!*
  Функция multiplyBy принимает два аргумента - число и массив.
  Возвращает массив все значения которого умножены на число.
*!/

/!*
const multiplyBy = (num, arr) => {
    let result = [];

    for (let i = 0, max = arr.length; i < max; i += 1) {
        result.push(arr[i] * num);
    }

    return result;
};*!/

let multiplyBy = (num, arr) => arr.map(item => item * num);

console.log( multiplyBy(2, [1, 2, 3, 4, 5]) ); // [2, 4, 6, 8, 10]
console.log( multiplyBy(3, [1, 2, 3, 4, 5]) ); // [3, 6, 9, 12, 15]
console.log( multiplyBy(4, [1, 2, 3, 4, 5]) ); // [4, 8, 12, 16, 20]

/!*
  Функция summAllNumbers принимает любое число аргументов.
  Возвращает число - сумму всех аргументов.
*!/

/!*
function summAllNumbers(...args) {
    let accumulator = 0;

    for (let i = 0, max = args.length; i < max; i += 1) {
        accumulator += args[i];
    }

    return accumulator;
}*!/

let summAllNumbers = (...args) => args.reduce((acc, item) => acc + item, 0);

console.log( summAllNumbers(1, 2, 3) ); // 6
console.log( summAllNumbers(1, 2, 3, 4) ); // 10
console.log( summAllNumbers(1, 2, 3, 4, 5) ); // 15

/!*
  Функция findEvery получает два аргумента - число и массив.
  Возвращает true если все элементы массива больше или равны числу.
  Иначе если есть хоть один элемент меньше числа, то возвращается false.
*!/

/!*
const findEvery = (num, arr) => {
    for (let i = 0, max = arr.length; i < max; i += 1) {
        if (arr[i] < num) {
            return false;
        }
    }

    return true;
};*!/


let findEvery = (num, arr) => arr.every(item => item >= num);

console.log( findEvery(5, [5, 6, 7, 8, 9]) ); // true
console.log( findEvery(6, [5, 6, 7, 8, 9]) ); // false
console.log( findEvery(4, [5, 6, 7, 8, 9]) ); // true
*/

//-----------------------------------------------------------------

/*
  Напишите функию getPropValues(arr, prop), принимающую
  параметры arr - массив, и prop - имя ключа в объекте.

  Функция должна возвращать массив всех значений этого ключа из arr.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/


/*
const guests = [
    { name: "Mango", age: 20, isActive: true },
    { name: "Poly", age: 18, isActive: false },
    { name: "Ajax", age: 30, isActive: true },
    { name: "Chelsey", age: 45, isActive: false }
];

let getPropValues = (arr, prop) => arr.map(item => item[prop]);


// Вызовы функции для проверки
console.log( getPropValues(guests, "name") ); // ['Mango', 'Poly', 'Ajax', 'Chelsey']

console.log( getPropValues(guests, "age") ); // [20, 18, 30, 45]

console.log( getPropValues(guests, "isActive") ); // [true, false, true, false]
*/



/*
  Напишите функцию setGuestState(guests, period), где
  guests - массив гостей, period - кол-во дней после
  которого считается что гость не активен.

  Если значение поля inactiveDays болше чем period,
  поставить для isActive значение false.

  Если же значение inactiveDays меньше чем period,
  поставить для isActive значение true

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/


/*
const users = [
    { name: 'Mango', inactiveDays: 15, isActive: true },
    { name: 'Poly', inactiveDays: 8, isActive: false },
    { name: 'Ajax', inactiveDays: 32, isActive: false },
    { name: 'Chelsey', inactiveDays: 85, isActive: true }
];

function setGuestState(guests, period) {
    return guests.map((item, ind) => item.inactiveDays > period ? {...item, isActive : false} : {...item, isActive : true});

}

// Вызовы функции для проверки
console.log(
    setGuestState(users, 10)
); // Объекты Mango, Ajax, Chelsey получат isActive false, а Poly наоборот true

console.log(
    setGuestState(users, 20)
); // Объекты Ajax, Chelsey получат isActive false, а Mango и Poly наоборот true

console.log(
    setGuestState(users, 50)
); // Объект Chelsey получит isActive false, а Mango, Poly и Ajax наоборот true
*/

//------------------------------------------------------


/*
  Напишите функию getActiveGuests(guests), принимающую
  один параметр guests - массив объектов гостей.

  Функция должна возвращать массив объектов гостей,
  значение поля isActive которых true.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

const guests = [
    { name: "Mango", age: 20, isActive: true },
    { name: "Poly", age: 18, isActive: false },
    { name: "Ajax", age: 30, isActive: true },
    { name: "Chelsey", age: 45, isActive: false }
];

// Вызовы функции для проверки
console.log(getActiveGuests(guests)); // массив из 2-х объектов Mango и Ajax




