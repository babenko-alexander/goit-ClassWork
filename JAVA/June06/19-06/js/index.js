/*let month = prompt('Введи мiсяць з великой букви');
if (month === 'Червень' || month === 'Липень' || month === 'Серпень') {
    alert('Зараз лето');
} else if (month === 'Грудень' || month === 'Сечень' || month === 'Лютий') {
    alert('Зараз зима');
} else if (month === 'Березень' || month === 'Кветень' || month === 'Травень') {
    alert('Зараз весна');
} else if (month === 'Вересень' || month === 'Жовтень' || month === 'Листопад') {
    alert('Зараз осень');
} else {
    alert('Це ж не мiсяць, дядько!!!');
}*/


let month = prompt('Введи мiсяць з великой букви');
switch (month) {
    case 'Червень':
    case 'Липень':
    case 'Серпень':
        alert('Зараз лето');
        break;
    case 'Грудень':
    case 'Сечень':
    case 'Лютий':
        alert('Зараз зима');
        break;
    case 'Березень':
    case 'Кветень':
    case 'Травень':
        alert('Зараз весна');
        break;
    case 'Вересень':
    case 'Жовтень':
    case 'Листопад':
        alert('Зараз осень');
        break;
    default:
        alert('Це ж не мiсяць, дядько!!!');
}
