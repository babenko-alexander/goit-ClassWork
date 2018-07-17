/*
  Напишите скрипт, который, для объекта user, последовательно:

    - добавляет поле mood со значением 'happy'

    - заменяет значение hobby на 'javascript'

    - удаляет свойство premium

    - выводит содержимое объекта user в формате ключ:значение
      используя цикл for...in

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.keys и for...of

    - выводит содержимое объекта user в формате ключ:значение
      используя Object.entries и for...of
*/


/*
const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true
};

user.mood = 'happy';
user.hobby = 'javascript';
delete user.premium;

for (let key in user) {
    console.log(`Key ${key} : ${user[key]}`);
}

let keys = Object.keys(user);

for (let el of keys) {
    console.log(`key : ${el}`);
}

let entries = Object.entries(user);

for (let el of entries) {
    console.log(`${el[0]} - ${el[1]}`);
}
*/


/*
  Напиште скрипт который определит и выведет в консоль
  имя сотрудника который выполнил больше всех задач.

  Сотрудники и кол-во выполненых задач содержатся
  как свойства объекта в формате "имя":"кол-во задач"
*/


const tasksCompleted = {
    ann: 29,
    david: 35,
    helen: 1,
    lorence: 99,
};

/*
let maxVal = 0;
let name = '';
for (key in tasksCompleted) {
    if (tasksCompleted[key] > maxVal) {
        name = key;
        maxVal = tasksCompleted[key];
    }
}
console.log(name + maxVal);
*/


/*
let values = Object.values(tasksCompleted);
let users = Object.keys(tasksCompleted);
// console.log(values);
console.log(users);
// console.log(Math.max(...values));
// Math.max([29, 35, 1, 99]) // Math.max(values)
// let maxTask = Math.max(29, 35, 1, 99); // Math.max(...values)
let maxTask = Math.max(...values);
let winnerIndex = values.indexOf(maxTask);
let winner = users[winnerIndex];
console.log(winner);
*/


/*
  Напишите функцию countProps(obj),
  считающую кол-во свойств в объекте.
  Функция возвращает количество свойств.
*/

// Вызовы функции для проверки
console.log(
    countProps({})
); // 0

console.log(
    countProps({a: 1, b: 3, c: 'hello'})
); // 3



