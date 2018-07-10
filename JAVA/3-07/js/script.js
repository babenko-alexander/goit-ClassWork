'use strict';

/*
  Создать функцию-конструктор Account, которая добавляет будущему
  объекту поля login, email и friendsCount.

  В prototype функции-конструктора добавить метод getAccountInfo(),
  который выводит в консоль значения полей login, email и friendsCount.

  Обратите внимание, метод будет всего один, в поле prototype функции-конструктора,
  а использовать его смогут все экземпляры, по ссылке.

  Создать несколько экземпляров с разными значениями свойств, вывести их в консоль.
*/

/*function Account(login, email, friendsCount) {
    this.login = login;
    this.email = email;
    this.friendsCount = friendsCount;
}
 Account.prototype.getAccountInfo = function () {
     console.log(`Login - ${this.login}, email - ${this.email}, friendsCount - ${this.friendsCount}`);
 };

let kenny = new Account('Kenny', 'kenny@g.com', 5);
let stan = new Account('Stan', 'stan@g.com', 4);
let eric = new Account('Eric', 'eric@g.com', 3);

console.log(kenny);
kenny.getAccountInfo();*/



/*class Account {
    constructor(login, email, friendsCount) {
        this.login = login;
        this.email = email;
        this.friendsCount = friendsCount;
    }

    getAccountInfo() {
        console.log(`Login - ${this.login}, email - ${this.email}, friendsCount - ${this.friendsCount}`);
    };
}

let kenny = new Account('Kenny', 'kenny@g.com', 5);
kenny.getAccountInfo();*/


/*
  Напишите функцию-конструктор StringBuilder.

  На вход она получает один параметр string - строку.

  Добавьте следующие методы в prototype функции-конструктора.

    - getValue() - выводит в консоль текущее значение поля value

    - append(str) - получает парметр str - строку и добавляет
      ее в конец значения поля value

    - prepend(str) - получает парметр str - строку и добавляет
      ее в начало значения поля value

    - pad(str) - получает парметр str - строку и добавляет
      ее в начало и в конец значения поля value
*/

/*
function StringBuilder(string = "") {
    this.value = string;
}
StringBuilder.prototype.showValue = function () {
    console.log(this.value);
}

StringBuilder.prototype.append = function (str) {
    this.value += str;
}

StringBuilder.prototype.prepend = function (str) {
    this.value = str + this.value;
}

StringBuilder.prototype.pad = function (str) {
    this.value = str + this.value + str;
}*/



/*
class StringBuilder {
    constructor (string = "") {
        this.value = string;
    }
    showValue() {
        console.log(this.value);
    }

    append(str) {
        this.value += str;
    }

    prepend(str) {
        this.value = str + this.value;
    }

    pad(str) {
        this.value = str + this.value + str;
    }
}



const myString = new StringBuilder('.');

myString.append('^');
myString.showValue(); // '.^'

myString.prepend('^');
myString.showValue(); // '^.^'

myString.pad('=');
myString.showValue(); // '=^.^='
*/


/*
  Создайте класс Car с указанными полями и методами.
*/



/*
class Car {
    constructor(speed, maxSpeed, running = false, distance = 0) {
        this.speed = speed;
        this.maxSpeed = maxSpeed;
        this.running = running;
        this.distance = distance;
        /!*
          Добавьте свойства:
            - speed - для отслеживания текущей скорости, изначально 0.

            - maxSpeed - для хранения максимальной скорости

            - running - для отслеживания заведен ли автомобиль,
              возможные значения true или false. Изначально false.

            - distance - содержит общий киллометраж, изначально с 0
        *!/

    }

    turnOn() {
        this.running = true;
        // Добавьте код для того чтобы завести автомобиль
        // Просто записывает в свойство running значание true
    }

    turnOff() {
        this.running = false;
        // Добавьте код для того чтобы заглушить автомобиль
        // Просто записывает в свойство running значание false
    }

    accelerate(spd) {
        spd <= this.maxSpeed ? this.speed = spd : this.speed;
        // Записывает в поле speed полученное значение, при условии что
        // оно не больше чем значение свойства maxSpeed
    }

    decelerate(spd) {
        spd <= this.maxSpeed && spd >= 0 ? this.speed = spd : this.speed;
        // Записывает в поле speed полученное значение, при условии что
        // оно не больше чем значение свойства maxSpeed и не меньше нуля
    }

    drive(hours) {
        this.distance = hours * this.speed;
        // Добавляет в поле distance киллометраж (hours умноженное на значение поля speed),
        // но только в том случае если машина заведена!
    }
}


let macWeen = new Car(100, 250);

console.log(macWeen);
macWeen.accelerate(280);

macWeen.accelerate(190);
console.log(macWeen);
*/



/*class TankConstructor {
    constructor (name, color = "white", coordinateX = 0, coordinateY = 0)  {
        this.coordinateX = coordinateX;
        this.coordinateY = coordinateY;
        this.name = name;
        this.color = color;
        this.life = 100;
        this.ammunition = 5;
        this.engineStatus = true;
    }
    moveToX(x) {
        return this.checkEngine() ? this.coordinateX : this.coordinateX += x;
    };
    moveToY(y) {
        return this.checkEngine() ? this.coordinateY : this.coordinateY += y;
    };
    fireTo(x, y) {
        this.canFire() ? this.ammunition-- : alert("no amunition");
    };
    canFire() {
        return this.ammunition > 0 && this.life > 0;
    };
    checkHealth() {
        return this.life > 0 && this.life < 100;
    };
    heal(x) {
        this.checkHealth() ? this.life += x : this.life;
        if (this.life > 100) {
            this.life = 100;
        }
    };
    checkEngine() {
        return !this.engineStatus;
    };
    repairEngine() {
        return this.checkEngine() ? this.engineStatus = true : alert("Engine is working");
    };
    showCoordinate() {
        return `X: ${this.coordinateX} Y: ${this.coordinateY}`;
    };
}

let t34 = new TankConstructor('T34', 'black');

let tiger = new TankConstructor('Tiger', 'green');

console.log(t34.heal(20));
console.log(t34);
console.log(tiger);*/


// 1)Створити клас Worker що буде мати властивості name, surname, rate, days
// 2) Додати метод getSalary(),
// 3) Створити 2 робітника і знайти їх зарплати
// 4) Модифікувати клас так щою всі 4 властивості з пункта №1 були приватними і написати для їх читання гетери
// 5) Для властивостей rate, days додати методи сетери

/*class Worker {
    constructor (name, surname, rate, days) {
        this._name = name;
        this._surname = surname;
        this._rate = rate;
        this._days = days;
    }
    get getSalary() {
        return this._rate * this._days;
    }
    get getName() {
        return this._name;
    }
    get getSurame() {
        return this._surname;
    }
    get getRate() {
        return this._rate;
    }
    get getDays() {
        return this._days;
    }
    set rate(rate) {
        this._rate = rate;
    }
    set days(days) {
        this._days = days;
    }
}

let ivan = new Worker('Ivan', 'Ivanov', 100, 15);
let petro = new Worker('Petro', 'Petrov', 110, 17);

console.log(ivan);
console.log(petro);

console.log(ivan.getSalary);
console.log(petro.getSalary);*/


// 1) Створити клас User шо буде мати поля name, surname
// 2) Додати метод getFullName() що виводить на екран імя і прізвище
// 3) Створити клас Student шо буде наслідуватися від User
// 4) Властивості  name, surname буде наслідувати від User і буде мати власну властивість yearIn
// 5) Для студента додати метод getCourse() що показує курс на якому навчається зараз студент (від поточного року відняти рік вступу)
// 6) Додати студенту метод getFullInfo() який бере інформацію з батьківського метода getFullName() і свого getCourse() і виводить її на екран


class User {
    constructor (name, surname) {
        this._name = name;
        this._surname = surname;
    }
     getFullName() {
        return `Name: ${this._name}, Surname: ${this._surname}`;
    }
}

class Student extends User {
    constructor (name, surname, yearIn) {
        super (name, surname);
        this._yearIn = yearIn;
    }
     getCourse() {
        return 2018 - this._yearIn;
    }
     getFullInfo() {
        return `${super.getFullName()}, course: ${this.getCourse()}`
    }
}

let petro = new Student('Petro', 'Petrov', 2015);
console.log(petro);
console.log(petro.getCourse());
console.log(petro.getFullInfo());

