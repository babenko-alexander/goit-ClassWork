/*
let i = 0;
let arr = [];

while (i <= 9) {
   let arrItem = Math.floor((Math.random() * 100));
   arr.push(arrItem);
   i++;
}
console.log(arr);*/


/*
let arr = [5, 10, 25, 68, 78, 95];
let arrPow = [];

for (let i = 0, max = arr.length; i < max; i++) {
    arrPow[i] = Math.pow(arr[i], 2);
    console.log(arrPow[i]);
}
console.log(arrPow);
*/


/*
let arr = [];
let arrLength = +prompt('How much goods do you need?');

for (let i = 0; i < arrLength; i++) {
    let arrItem = prompt(`Enter your ${i + 1} good`);
    arr.push(arrItem);
}
console.log(arr);
*/


/*
let n = 0;

do {
     n = prompt('Enter number over 100');
} while (n <= 100 && n !== null);
*/


let students = ['Stupak', 'Yurchenko', 'Tabanyk', 'Baranov', 'Didenko', 'Chuprun', 'Babenko', 'Mukanovskyi', 'Plaski', 'Sokolov', 'Galatuk', 'Savin', 'Grygorchuk','Krasnoiarov', 'Rotman', 'Scryagin', 'Humenchuk'];

let ind = Math.floor(Math.random() * students.length);

// alert(`${students[ind]} К ДОСКЕ!!!`);
document.write(`${students[ind]} К ДОСКЕ!!!`);



// Напишите скрипт, который выводит через console.log все
// числа от min до max, с двумя исключениями:

// - Для чисел, нацело делящихся на 3, вместо числа выводится строка 'Fizz'

// - Для чисел, нацело делящихся на 5, но не на 3, вместо числа выводится строка 'Buzz'

// PS: используйте цикл for

/*
const min = 1;
const max = 100;
for (let i = min; i <= max; i++) {
    if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}
*/


/*
  Напишите скрипт, который выбирает из массива numbers
  все числа, которые больше чем значение переменной num,
  записывая эти числа в массив newArray.

  В результате в массиве newArray будут все подходяшие числа.

  PS: используйте цикл for или for...of и оператор ветвления if
*/

//-------------------------------------------------------

// const numbers = [1, 3, 17, 5, 9, 14, 8, 14, 34, 18, 26];
// const num = 10;
// const newArray = [];

/*for (i = 0; i < numbers.length; i++) {
    if (numbers[i] > num) {
        newArray.push(numbers[i]);
    }
}*/

/*for (i = 0; i < numbers.length; i++) {
     (numbers[i] > num) ? newArray.push(numbers[i]) : null;
}*/


/*for (let el of numbers) {
    if (el > num) {
        newArray.push(el);
    }
}*/


/*
for (let el of numbers) {
    el > num ? newArray.push(el) : null;
}

console.log(numbers);
console.log(newArray);
*/

//-----------------------------------------------------


/*
  Напишите скрипт, который проверяет произвольную строку
  в переменной string и находит в ней самое длинное слово,
  записывая его в переменную longestWord.
*/


/*
const string = "May the force be with you";
let longestWord = '';

let arr = string.split(' ');

for (let word of arr) {
    if (word.length > longestWord.length) {
        longestWord = word;
    }
}

console.log(longestWord); // 'force'
*/


/*
  Напишите скрипт который:

  - Запрашивает по очереди числа при помощи prompt и сохраняет их в массиве.
    Используйте do...while.

  - Заканчивает запрашивать числа, как только посетитель введёт не число
    или нажмёт Cancel. При этом ноль 0 не должен заканчивать ввод,
    это разрешённое число.

  - После того как ввод был завершен, если массив не пустой,
    скрипт выводит сумму всех значений массива: "Сумма: <сумма всех значений в массиве>"
    Используйте цикл for...of
*/


/*
let arr = [];
let num = 0;
let sum = 0;

do {
    num = prompt('Enter number');
    if (!isNaN(num) && (num !== null) && num.length !== 0) {
        arr.push(+num);
    }

} while (!isNaN(num) && (num !== null));

// arr.pop();

console.log(arr);

if (arr.length !== 0 ) {
    for (let el of arr) {
        sum += el;
    }
}

console.log(sum);
*/





