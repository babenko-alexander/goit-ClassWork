/*
  Напишите функцию checkNumberType(num)

  Функция получает число num как аргумент и возвращает
  строку "Even" если число четное и строку "Odd" если не четное.
*/

// Вызовы функции для проверки

/*
function checkNumberType(num) {
    // let res = 0;
    let res = (num % 2 === 0) ? 'Even' : Math.abs(num % 2) === 1 ? 'Odd' : 'Input error';
    return res;

}

console.log( checkNumberType(2) ); // 'Even'

console.log( checkNumberType(46) ); // 'Even'

console.log( checkNumberType(3) ); // 'Odd'

console.log( checkNumberType(-3) ); // 'Odd'

console.log( checkNumberType(17) ); // 'Odd'

console.log( checkNumberType('adf') ); // 'Odd'
*/


/*
  Напишите функцию formatString(str)

  - Функия принимает на вход строку str
  - Если длина строки не превышает 40 символов, функция возвращает ее.
  - Если длина больше 40 символов, то функция обрезает строку до 40-ти
    символов и добавляет в конец строки троеточие '...', после чего
    возвращает укороченную версию.
*/


/*
function formatString(inp) {
    let res = (inp.length <= 40) ? inp : inp.substr(0, 40);
    return res;
}


// Вызовы функции для проверки
console.log(
    formatString("Curabitur ligula sapien, tincidunt non.")
); // вернется оригинальная строка

console.log(
    formatString("Vestibulum facilisis, purus nec pulvinar iaculis.")
); // вернется форматированная строка

console.log(
    formatString("Curabitur ligula sapien.")
); // вернется оригинальная строка

console.log(
    formatString("Nunc sed turpis. Curabitur a felis in nunc fringilla tristique.")
); // вернется форматированная строка
*/


/*
  Напишите функцию checkForSpam(str)

  Функция принимает 1 параметр str - строку,
  и проверять ее на содержание слов: spam и sale

  Если нашли зарещенное слово то функция возвращает true,
  если запрещенных слов нет функция возвращает false

  PS: слова могут быть в произвольном регистре
*/


/*
function checkForSpam(str) {
    str = str.toLocaleLowerCase();
    let res = str.indexOf('spam') === -1 && str.indexOf('sale') === -1 ? false : true;
    return res;
}

// Вызовы функции для проверки
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true
*/


/*
function sum(a, b) {
    return a + b;
}

let sum = (a, b) => {
    return a + b
};

let sum = (a, b) => a + b;
*/


/*
  Написать функцию, getPx(str)

  Функция getPx должна получать строку вида '10px',
  проверять была ли передана строка, если да,
  возвращать только числовую составляющую, к примеру 10.

  Если была передана не строка, функция возвращает null.
*/


/*function getPx(inp) {
    return typeof inp === 'string' ? parseFloat(inp) : null;
}*/


/*
let getPx = (str) => typeof str === "string" ? parseFloat(str) : null;

// Вызовы функции для проверки
console.log( getPx("10px") === 10 ); // должно быть:  true
console.log( getPx("10.5") === 10.5 ); // должно быть:  true
console.log( getPx("0") === 0 ); // должно быть:  true
console.log( getPx(-1) ); // должно быть:  null
console.log( getPx(10) ); // должно быть:  null
*/


/*
  Создайте фукнцию findLongestWord(str),
  которая получает аргументом произвольную строку и
  возвращает самое длинное слово в этой строке.

  Важное условие - в строке могут быть только пробелы
  и символы букв и цифр!
*/



/*
let findLongestWord = (str) => {
    let longest = '';
    let arr = str.split(' ');
    for (el of arr) {
        el.length > longest.length ? longest = el : null;
    }
    return longest;

}

// Вызовы функции для проверки
console.log(
    findLongestWord("The quick brown fox jumped over the lazy dog")
); // вернет 'jumped'

console.log(
    findLongestWord("Google do a roll")
); // вернет 'Google'

console.log(
    findLongestWord("May the force be with you")
); // вернет 'force'
*/


/*
  Создайте функцию findLargestNumber(numbers),
  которая получает массив чисел numbers, и возвращает
  самое большое число в массиве.
*/


/*
let findLargestNumber = (numbers) => {
    let longest = 0;
    for (el of numbers) {
        el > longest ? longest = el : null;
    }
    return longest;
}

// Вызовы функции для проверки
console.log(
    findLargestNumber([1, 2, 3])
); // вернет 3

console.log(
    findLargestNumber([27, 12, 18, 5])
); // вернет 27

console.log(
    findLargestNumber([31, 128, 14, 74])
); // вернет 128
*/


// 1) Написати функцію spliceElement() що вирізає з массива третій елемент
// 2) Написати функцію checkExist() що перевіряє чи є цей вирізаний елемент в базі
// 3) Якщо його немає додати його, якщо є нічого не робити addNumber()

let dataBase = [5, 10, 25, 68, 75, 43];
let workArr = [10, 20, 30, 40];

function spliceElement(arr, position) {
    return arr.splice(position, 1)[0];
}

function checkExist(arr, number) {
    return arr.includes(number);
}

function addNumber(arr) {
    let result = spliceElement(workArr, 2);
    if (!checkExist(arr, result)) {
        arr.push(result);
    } else {
        alert('element alredy exists');
    }
}

addNumber(dataBase);


console.log(dataBase);
console.log(workArr);





