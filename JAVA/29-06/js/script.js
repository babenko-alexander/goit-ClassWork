'use strict';


// Написати об'єкт tank який буде мати такі властивості і методи.
// 1) coordinate 10 координати Х
// 2)CoordinateY 10 координати по У
// 3) life 100 здоровя
// 4) ammunition 5  кількість патронів
// 5) engineStatus true статус двигуна
// 6) moveToX(x) рухається до точки х
// 6) moveToY(у) рухається до точки у
// 7) fireTo(x, y) стріляє в точку х, у
// 8) canFire() перевірка чи є патрони
// 9) checkHealth() перевірка чи є неповне здоров'я
// 10) heal(x) додає здоровя
// 11) checkEngine() перевірка статусу двигуна
// 12) repairEngine() починка двигуна
// 13) showCoordinate() показує координати танка
// 14)  name імя гравця
// 15) color

/*
let t34 = {
    coordinateX: 10,
    coordinateY: 10,
    life: 50,
    ammunition: 5,
    engineStatus: false,
    moveToX(x) {
        return this.checkEngine() ? this.coordinateX : this.coordinateX += x;
    },
    moveToY(y) {
        return this.checkEngine() ? this.coordinateY : this.coordinateY += y;
    },
    fireTo(x, y) {
        this.canFire() ? this.ammunition-- : alert("no amunition");
    },
    canFire() {
        return this.ammunition > 0 && this.life > 0;
    },
    checkHealth() {
        return this.life > 0 && this.life < 100;
    },
    heal(x) {
        this.checkHealth() ? this.life += x : null;
        if (this.life > 100) {
            this.life = 100;
        }
    },
    checkEngine() {
        return !this.engineStatus;
    },
    repairEngine() {
        return this.checkEngine() ? this.engineStatus = true : alert("Engine is working");
    },
    showCoordinate() {
        return `X: ${this.coordinateX} Y: ${this.coordinateY}`;
    },
    name: "Sasha",
    color: "green",
};

t34.moveToX(10);
t34.moveToX(20);
t34.moveToY(30);
t34.moveToY(40);
console.log(t34.showCoordinate());
t34.fireTo(8,8);
t34.fireTo(8,8);
t34.fireTo(8,8);
t34.repairEngine();
t34.heal(30);
console.log(t34);
*/


/*
function TankConstructor({name, color = "white", coordinateX = 0, coordinateY = 0}) {
    this.coordinateX = coordinateX;
    this.coordinateY = coordinateY;
    this.name = name;
    this.color = color;
    this.life = 100;
    this.ammunition = 5;
    this.engineStatus = true;
    this.moveToX = function (x) {
        return this.checkEngine() ? this.coordinateX : this.coordinateX += x;
    };
    this.moveToY = function (y) {
        return this.checkEngine() ? this.coordinateY : this.coordinateY += y;
    };
    this.fireTo = function (x, y) {
        this.canFire() ? this.ammunition-- : alert("no amunition");
    };
    this.canFire = function () {
        return this.ammunition > 0 && this.life > 0;
    };
    this.checkHealth = function () {
        return this.life > 0 && this.life < 100;
    };
    this.heal = function (x) {
        this.checkHealth() ? this.life += x : null;
        if (this.life > 100) {
            this.life = 100;
        }
    };
    this.checkEngine = function () {
        return !this.engineStatus;
    };
    this.repairEngine = function () {
        return this.checkEngine() ? this.engineStatus = true : alert("Engine is working");
    };
    this.showCoordinate = function () {
        return `X: ${this.coordinateX} Y: ${this.coordinateY}`;
    };
}

let t34Pattern = {
    coordinateX: 10,
    coordinateY: 10,
    name: "Kenny",
    color: "green",
};
let tigerPattern = {
    coordinateX: 20,
    coordinateY: 10,
    name: "Kyle",
    color: "black",
};
let pantherPattern = {
    coordinateX: 30,
    coordinateY: 10,
    name: "Eric",
};
let is8Pattern = {
    coordinateX: 30,
    coordinateY: 10,
    name: "Stan",
};
let t55Pattern = {
    coordinateX: 30,
    coordinateY: 10,
    name: "Butters",
};


const t34 = new TankConstructor(t34Pattern);
const tiger = new TankConstructor(tigerPattern);
const panther = new TankConstructor(pantherPattern);
const is8 = new TankConstructor(is8Pattern);
const t55 = new TankConstructor(t55Pattern);



console.log(t34);
console.log(tiger);
console.log(panther);
console.log(is8);
console.log(t55);

t34.moveToX(1112);
console.log(t34);
*/



/*
function User(setting) { // obj with settings
    this.age = setting.age;
    this.name = setting.name;
    this.isActive = setting.isActive;
    this.isPremium = setting.isPremium;
    this.likesCount = setting.likesCount;

    this.showLikes = function () {
        return this.likesCount;
    }
}

//
const jane = new User({age: 25,name: 'Jane',isActive: true,isPremium: true,likesCount: 500});
const mick = new User({name: 'Mick',age: 30,likesCount: 150,isActive: false,isPremium: true});
console.log(mick);
console.log(jane);
*/


//-------------------------------------------------------------------------------


/*
  Расставьте отсутствующие this
  в методах объекта store
*/

const store = {
    products: ['bread', 'cheese', 'milk', 'apples'],
    managers: ['poly', 'mango', 'ajax'],
    addManager(manager) {
        this.managers.push(manager);

        console.log(this.managers);
    },
    removeManager(manager) {
        const idx = this.managers.indexOf(manager);

        this.managers.splice(idx, 1);

        console.log(this.managers);
    },
    getProducts() {
        console.log(this.products);

        return this.products;
    }
}

store.addManager('chelsey'); // ['poly', 'mango', 'ajax', 'chelsey']

store.removeManager('mango'); // ['poly', ajax', 'chelsey']

store.getProducts(); // ['bread', 'cheese', 'milk', 'apples']



/*
  Расставьте отсутствующие this в конструкторе объектов Account
*/

function Account({ login, password, type = "regular" }) {
    this.login = login;
    this.password = password;
    this.type = type;

    this.changePassword = function(newPassword) {
        this.password = newPassword;

        console.log(this.password);
    };

    this.getAccountInfo = function() {
        console.log(`
      Login: ${this.login}, 
      Pass: ${this.password}, 
      Type: ${this.type}
    `);
    };
}

const account = new Account({
    login: "Mango",
    password: "qwe123",
    type: "premium"
});

console.log(account.login); // 'Mango'
console.log(account.password); // 'qwe123'
console.log(account.type); // 'premium'

account.changePassword("asdzxc"); // 'asdzxc'

account.getAccountInfo(); // Login: 'Mango', Pass: 'asdzxc', Type: 'premium'



/*
  Напишите код, который бы  с помощью
  функции-конструкора User, позволял создавать
  объекты пользователя со следующим свойствами:
    - name - строка (имя)
    - isActive - буль (активен)
    - age - число (возраст)
    - friends - число (кол-во друзей)

  Имя, активность, возраст и друзей,
  необходимо передать как аргументы
  при вызове конструктора.

  Добавить метод getUserInfo(), которая, выводит строку:
  `User ${имя} is ${возраст} years old and has ${кол-во друщзей} friends`

  Создать несколько объектов пользователя User и с помощью
  функции getUserInfo вывести строку в консоль.
*/

function User(name, age, friends = 0, isActive = true) {
    this.name = name;
    this.isActive = isActive;
    this.age = age;
    this.friends = friends;
    this.getUserInfo = function() {
        console.log(`User ${this.name} is ${this.age} years old and has ${this.friends} friends`)
    }
}

let user1 = new User('Kenny', 22, 2);
let user2 = new User('Stan', 26, 7);
let user3 = new User('Eric', 25);

console.log(user1);
user1.getUserInfo();
user2.getUserInfo();
user3.getUserInfo();



