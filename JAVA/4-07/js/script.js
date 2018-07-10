'use strict';

let enemy = [];

for (let i = 100; i < 200; i += 75) {
    for (let k = 25; k < 950; k += 100) {
        // let item = {left: k, top: i};
        // enemy.push(item);
        enemy.push({left: k, top: i});
    }
}


console.log(enemy);


