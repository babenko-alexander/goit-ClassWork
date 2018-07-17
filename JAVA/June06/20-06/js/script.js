/* Есть массив имен пользователей */

const ussers = ["Mango", "Poly", "Ajax", "Chelsey"];

/* Используя методы массива, последовательно выполнить следующие операции */

// Удалить из начала массива нулевой элемент
ussers.shift(0);
console.log(ussers); // ["Poly", "Ajax", "Chelsey"]

// Удалить из конца массив последний элемент
ussers.pop();
console.log(ussers); // ["Poly", "Ajax"]

// Добавить в начало массива любое имя
ussers.unshift("Kenny");
console.log(ussers); // ["добавленое имя", "Poly", "Ajax"]

// Добавить в конец массива два любых имени за одну операцию
ussers.push('Cartman', 'Stan');
console.log(ussers); //  ["добавленое ранее имя", "Poly", "Ajax", "имя 1", "имя 2"]


/*
  Есть массив имен пользователей.
  В первом console.log вывести длину массива.

  В последующих console.log дополнить конструкцию
  так, чтобы в консоль вывелись указаные в комментариях
  элементы массива.
*/

/*const users = ['Mango', 'Poly', 'Ajax', 'Chelsey'];

console.log(users.length); // 4

console.log(users[1]); // Poly
console.log(users[3]); // Chelsey
console.log(users[0]); // Mango
console.log(users[2]); // Ajax


let animals = ["cat","dog","rabbit","bird","fish"];
// вивести в консоль випадкову тваринку з масиву

let index = Math.floor((Math.random() * animals.length));
let animal = animals[index];

let usersAnimal = prompt('Enter one of these animals here (cat, dog, rabbit, bird, fish)');

if (animal === usersAnimal) {
    alert("You are good");
} else {
    alert("Ypu looser. Try again!");
}*/

//----------------------------------------------

/*
let loginArr = ['bob', 'mango', 'admin', 'batman', 'superuser'];

// 1) Запропонувати користувачу ввести логін
// 2) Якщо логін є в масиві повідомити юзера що такий логін існує
// 3) Якщо такого логіна немає привітати користувача з реєстрацією і додати його логін в масив loginArr

let usersLogin = prompt('Enter your login');
if (loginArr.includes(usersLogin)) {
    alert(`${usersLogin} user already exists`);
} else {
    loginArr.push(usersLogin);
    alert('Congrats, ypu have joined our team!');
    console.log(loginArr);
}*/

//----------------------------------------------

let str = 'oko';
let str2 = 'test';

// let strArr, strArrRev;
// let str2Arr, str2ArrRev;

console.log(str === str.split('').reverse().join(''));
console.log(str2 === str2.split('').reverse().join(''));


// console.log(str2Arr);

// split
// reverse
// join
// 1)Перевірити чи являється слово паліндромом (слово що читається справа на ліво і зліва на право однаково)
//
// 2)Зробити перевірку і вивести в консоль true or false

// console.log(); // 'oko' true
// console.log(); // 'test' false

