/*
const getAllSkills = arr => {
    let skillsArr = [];
    arr.map(item => skillsArr.push(...item.skills));
    return skillsArr.sort().filter((item,index,arr) => item !== arr[index + 1]);
};

console.log(getAllSkills(users));
*/



// Написати функцію що видає фінальний результат в гольфі
// function golfScore(par, strokes) приймає 2 аргумента
// par - кількість ударів що дозволено, strokes - реальна кількість ударів
// Потрібно порівняти strokes з такими критеріями
// 1 дасть "Hole-in-one!"
// strokes <= par -2 дасть "Eagle"
// strokes == par -1 дасть "Birdie"
// strokes == par дасть "Par"
// strokes == par +1 дасть "Bogey"
// strokes == par +2 дасть "Double Bogey"
// Все інше "Go Home!"

function golfScore(par, strokes) {
    switch (true) {
        case (strokes === 1):
            return "Hole-in-one!";
        case (strokes <= par - 2):
            return "Eagle";
        case (strokes === par - 1):
            return "Birdie";
        case (strokes === par):
            return "Par";
        case (strokes === par + 1):
            return "Bogey";
        case (strokes === par +2):
            return "Double Bogey";
        default:
            return "Go Home!";
    }
}

console.log(golfScore(5, 1));

