'use strict';

let root = document.querySelector('#root-f');
let container = document.querySelector('#root');
let mail = document.querySelector('#mail');
let pass = document.querySelector('#pass');
let btn = document.querySelector('#btn');

let corPar = document.querySelector('.correct');
let wrMail = document.querySelector('.wrong-mail');
let wrPas = document.querySelector('.wrong-pas');

const regMail = /(\w+\.com$|\.ua\b|\.net\b)/;
const regPas = /\w+[A-Z]/i;
const regPas2 = /\d/;

btn.addEventListener('click', check);
// btn.addEventListener('click', checkPass);

function check() {
    // console.log((regMail.test(mail.value)));
    // console.log(c);
    if (regMail.test(mail.value)) {
        // console.log('yes');
        if (regPas.test(pass.value) && regPas2.test(pass.value) && pass.value.length >= 4 && pass.value.length <= 16) {
            root.classList.add('hide');
            let parS = document.createElement('p');
            parS.textContent = 'Logination sucsessfull!!!';
            container.append(parS);
        } else {
            root.classList.add('hide');
            let parP = document.createElement('p');
            parP.textContent = 'Wrong password!';
            container.append(parP);
        }
    } else {
        root.classList.add('hide');
        let par = document.createElement('p');
        par.textContent = 'Wrong e-mail!';
        container.append(par);
    }
}

/*function checkPass() {
    d = (regPas.test(pass.value) && regPas2.test(pass.value) && pass.value.length >= 4 && pass.value.length <= 16);
    console.log(d);
}*/

