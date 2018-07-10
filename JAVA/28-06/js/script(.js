/*
  Напишите функию getGuestById(guests, id), принимающую
  guests - массив объектов гостей, id - идентификатор (число).

  Функция должна возвращать объект гостя с совпадающим id.

  PS: обязательно используйте функциональные методы массивов, никаких for!
*/

/*
const guests = [
    { id: 1, name: 'Mango', age: 20 },
    { id: 2, name: 'Poly', age: 18 },
    { id: 3, name: 'Ajax', age: 30 },
    { id: 4, name: 'Chelsey', age: 45 }
];

getGuestById = (guests, id) => guests.find(item => item.id === id);

// Вызовы функции для проверки
console.log(
    getGuestById(guests, 3)
); // {id: 3, name: 'Ajax', age: 30}

console.log(
    getGuestById(guests, 1)
); // {id: 1, name: 'Mango', age: 20}

console.log(
    getGuestById(guests, 5)
); // undefined
*/

//-----------------------------------------------------

/*
/!*
  Используя метод reduce, посчитайте сумму
  всех значений свойств объекта order.
*!/
const order = {
    bread: 10,
    apples: 25,
    chicken: 60,
    milk: 15,
    cheese: 40
};

sumCounter = (order) => Object.values(order).reduce((acc, item) => acc += item, 0);

console.log(sumCounter(order)); // 150
*/


//-----------------------------------------------------


/*
/!*
  Напишите функцию getTotalPrice(products, order), где
  products - объект со свойствами "имя продукта":"цена за единицу"
  order - объект со свойствами "имя продукта":"количество единиц".

  Функция возвращает общую сумму стоимости всех продуктов заказа.

  PS: используйте метод reduce
*!/

const products = {
    bread: 10,
    milk: 15,
    apples: 20,
    cheese: 30,
    chicken: 40
};

const orderA = {
    bread: 2,
    apples: 4,
    chicken: 1
};

const orderB = {
    bread: 1,
    milk: 2,
    cheese: 3
};

function getTotalPrice(products, order) {
    let ordersMas = [];
    for (key in order) {
        let hasKey = order.hasOwnProperty(key);
        if (hasKey) {
            ordersMas.push(order[key] * products[key]);
        }
    }
    return ordersMas.reduce((acc, item) => acc += item, 0);
    // return ordersMas;
}



// Вызовы функции для проверки
console.log(getTotalPrice(products, orderA)); // 140

console.log(getTotalPrice(products, orderB)); // 130
*/


//-----------------------------------------------------


/*
  Напишите функию allGuestsActive(guests), принимающую
  один параметр guests - массив объектов гостей.

  Функция должна возвращать true если значение поля isActive
  всех объектов true, в противном случае false.

  PS: используйте метод every или some, никаких for!
*/

//--------------------------------------------------------

/*
const guestsA = [
    { name: "Mango", isActive: true },
    { name: "Poly", isActive: false },
    { name: "Ajax", isActive: true }
];

const guestsB = [
    { name: "Mango", isActive: true },
    { name: "Poly", isActive: true },
    { name: "Ajax", isActive: true }
];

/!*
let activesArr = [];

function allGuestsActive(guests) {
   activesArr = guests.map(item => item.isActive);
}
*!/

allGuestsActive = guests => guests.every(item => item.isActive === true);


// Вызовы функции для проверки
console.log(allGuestsActive(guestsA)); // false

console.log(allGuestsActive(guestsB)); // true

// console.log(activesArr);
*/


const scientist = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
];

// 1) отримати масив вчених що народилися в 19 ст

let get19CentSientists = arr => arr.filter(item => item.year >= 1800 && item.year < 1900);

// console.log(get19CentSientists(scientist));

// 2) знайти суму років скільки прожили всі вченні

let lifePeriod = arr => arr.map(item => item.passed - item.year);
let totalLifePeriod = arr => arr.map(item => item.passed - item.year).reduce((acc, item) => acc + item, 0);

// console.log(lifePeriod(scientist));
// console.log(totalLifePeriod(scientist));

// 3) Відсортувати вчених по алфавіту

let sortSientistsAz = arr => arr.sort((a,b) => a.last < b.last ? -1 : 1);

// console.log(sortSientistsAz(scientist));

// 4) Відсортувати вчених по даті народження

let sortByRirthDate = arr => arr.sort((a,b) => a.year - b.year);

// console.log(sortByRirthDate(scientist));

// 5) Відсортувати вчених по кількості прожитих років

let sortByAge = arr => arr.sort((a,b) => (a.passed - a.year) - (b.passed - b.year));

// console.log(sortByAge(scientist));

// 6) Видалити з масива вчених що родилися в 15 або 16 або 17 столітті

let filterByCentBirth = arr => arr.filter(item => item.year < 1400 || item.year >= 1700);

// console.log(filterByCentBirth(scientist));

// 7) Знайти вченого який родився саме пізніше.

let findTheOldest = arr => {
    let sortedArr = arr.sort((a,b) => (b.passed - b.year) - (a.passed - a.year));
    return sortedArr[0];
}

// console.log(findTheOldest(scientist));

// 8) Знайти рік народження Albert Einstein

let findByLast = (arr, last) => {
    let albert = arr.find(item => item.last === last);
    return albert.year;
}

// console.log(findByLast(scientist, 'Einstein'));

// 9) Знайти вчених прізвище яких починається на літеру С

let scientistOnLetter = (arr, letter) => arr.filter(item => item.last[0] === letter);

// console.log(scientistOnLetter(scientist, 'C'));

// 10) Видалити з масива всіх вчених імя яких починається на A

let deleteByLetter = (arr, letter) => arr.filter(item => item.first[0] !== letter);

// console.log(deleteByLetter(scientist, 'A'));


//----------------------------------------------------------------------------


/*
  Создайте функцию isObjectEmpty(obj), которая получает
  один аргумент obj - объект, и проверяет пуст ли он (есть ли в нем свойства).

  Возвращает true если объект пустой, false если не пустой.
*/

let isObjectEmpty = obj => !Object.keys(obj).length > 0;

// Вызовы функции для проверки
console.log(
    isObjectEmpty({})
); // true

console.log(
    isObjectEmpty({a: 1})
); // false

console.log(
    isObjectEmpty({a: 1, b: 2})
); // false



/*
  Напишите функцию countTotalSalary(salaries),
  получающую объект и считающую общую сумму запрплаты работников.

  Каждое поле объекта передаваемого в функцию, имеет вид "имя":"зарплата"

  Функция возвращает общую сумму зарплаты.
*/

let countTotalSalary = salaries => Object.values(salaries).reduce((acc, item) => acc + item, 0);

// Вызовы функции для проверки
console.log(
    countTotalSalary({})
); // 0

console.log(
    countTotalSalary({
        mango: 100,
        poly: 150,
        alfred: 80
    })
); // 330



/*
  Напишите функцию getAllPropValues(arr, prop),
  которая получает массив объектов и имя ключа,
  возвращает массив значений определенного поля prop
  из каждого объекта в массиве
*/

const users = [
    { name: 'Poly', age: 7, mood: 'happy' },
    { name: 'Mango', age: 4, mood: 'blissful'},
    { name: 'Ajax', age: 3, mood: 'tired' }
];

let getAllPropValues = (arr, prop) => arr.map(item => item[prop]);

// Вызовы функции для проверки
console.log(
    getAllPropValues(users, 'name')
); // ['Poly', 'Mango', 'Ajax']

console.log(
    getAllPropValues(users, 'mood')
); // ['happy', 'blissful', 'tired']

console.log(
    getAllPropValues(users, 'active')
); // []

//------------------------------------------------------------



