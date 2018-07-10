'use strict';

function createNode (tag, classArr, attrObj, text, container, mode = 'append') {
    let el = document.createElement(tag);

    if (classArr !== null) {
    for (let className of classArr) {
        el.classList.add(className);
    }}
    for (let key in attrObj) {
        let hasKey = attrObj.hasOwnProperty(`${key}`);
        if (hasKey) {
            el.setAttribute(`${key}`, attrObj[`${key}`]);
        }
    }
    el.textContent = text;
    container[mode](el);
    return el;
}

const ArrSpan = [
    'SOME YEAR',
    'SOME OTHER YEAR',
    'SOME OTHER DIFERENT YEAR',
    'YET ANOTHER YEAR',
    'YESTERDAY?',
    'NO...',
    'WHO CARES?',
    'DUNNO',
    'MEEH',
    '????',
    '@$%^#',
];
const ArrItem = [
    ' - BORN IN CANADA AS WADE WILSON.',
    ' - HIS MOTHER DIED OF CANCER WHILE HE WAS YOUNG AND HIS FATHER (WHO WAS IN THE MILITARY) WAS PHYSICALLY ABUSIVE.',
    ' - WADE BEGAN HIS MERCENARY CAREER WHILE STILL IN HIS LATE TEENS.',
    ' - IN AMERICA, HE MET AND FELL IN LOVE WITH TEENAGE PROSTITUTE VANESSA CARLYSLE, WITH WHOM HE SHARED DREAMS OF A BETTER LIFE.',
    ' - LEARNING THAT HE HAD CONTRACTED CANCER, WILSON BROKE UP WITH VANESSA RATHER THAN FORCE HER TO REMAIN WITH A TERMINALLY ILL MAN.',
    ' - IN PURSUE OF HOPE FOR HIS TERMINAL CONDITION, HE JOINS THE WEAPON X PROGRAM',
    ' - HIS CANCER WAS TEMPORARILY ARRESTED VIA THE IMPLANTATION OF A HEALING FACTOR DERIVED FROM WOLVERINE',
    ' - DURING ONE MISSION, WILSON KILLED HIS TEAMMATE SLAYBACK. AS A RESULT, HE WAS REJECTED FROM THE WEAPON X PROGRAM AND SENT TO THE HOSPICE, ALLEGEDLY A GOVERNMENT FACILITY WHERE FAILED SUPERHUMAN OPERATIVES WERE TREATED.',
    ' - IN THE HOSPICE HE WAS TORTURED BY THE DOCTOR KILLEBREW AND HIS SADISTIC ASSISTANT AJAX, WHO TORE OUT WILSON’S HEART AND LEFT HIM FOR DEAD',
    ' - FOLLOWING HIS ESCAPE HE SOON RETURNED TO HIS FREELANCE MERCENARY ACTIVITIES, DONNING A COSTUME IN KEEPING WITH HIS NEW IDENTITY, DEADPOOL',
    ' - WHY DO YOU KEEP READING, THIS IS SO BORING...',
];

const ArrLink = [
    'CodeCamp',
    'Assets and idea',
    'Info',
    'The best twitter ever'
];
const ArrHref = [
    'https://www.freecodecamp.com/',
    'http://www.foxmovies.com/movies/deadpool',
    'http://marvel.com/universe/Deadpool_(Wade_Wilson)',
    'https://twitter.com/deadpoolmovie'
];

const jumbotron = document.querySelector('.jumbotron');

let titleContainer = createNode('div', ['row', 'title-container'], null, null, jumbotron);
let h1 = createNode('h1', ['text-center'], null, ' TRIBUTE PAGE', titleContainer);
let h1Span = createNode('span', ['red-text'], null, 'DEADPOOL', h1, 'prepend');
let irresponsability = createNode('p', ['text-center'], null, 'WITH GREAT POWER COMES GREAT ', h1);
let irresponsabilitySpan = createNode('span', ['red-text'], null, 'IRRESPONSIBILITY', irresponsability);

let mainImageContainer = createNode('div', ['row'], {id: 'main-image-container'}, null, jumbotron);
let mainImg = createNode('img', ['img-responsive', 'inside-shadow'], {src: 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool1-gallery-image.jpg', alt: 'picture'}, null, mainImageContainer);

let subTitleContainer = createNode('div', ['row', 'sub-title-container'], null, null, jumbotron);
let subTitle = createNode('h1', ['text-center'], null, 'TIMELINE', subTitleContainer);

let listContainer = createNode('div', ['row', 'list-container'], null, null, jumbotron);
const list = document.createElement('ul');
listContainer.append(list);


let frag = document.createDocumentFragment();
for (let i = 0; i <= 10; i++) {
    const listItem = createNode('li', ['list-item'], null, ArrItem[i], frag);
    const listSpan = createNode('span', ['red-text'], null, ArrSpan[i], listItem);
    frag.append(listItem);
}
list.append(frag);


let mainImageContainer2 = createNode('div', ['row'], {id: 'main-image-container'}, null, jumbotron);
let mainImg2 = createNode('img', ['img-responsive', 'inside-shadow'], {src: 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool-gallery-06-gallery-image.jpg', alt: 'picture'}, null, mainImageContainer2);

let subTitleContainer2 = createNode('div', ['row', 'sub-title-container'], null, null, jumbotron);
let subTitle2 = createNode('h1', ['text-center'], null, 'QUOTE', subTitleContainer2);

let mmmhhh = createNode('div', ['row'], null, null, jumbotron);
let mmmhhhCont = createNode('div', ['col-ls-6', 'col-ls-offset-3', 'col-md-6', 'col-md-offset-3'], null, null, mmmhhh);
let mmmhhhBC = createNode('blockquote', ['blockquote-reverse'], null, null, mmmhhhCont);
let mmmhhhPar = createNode('p', null, null, 'MMMMHHH... I\'M TOUCHING MYSELF TONIGHT.', mmmhhhBC);
const mmmhhhFooter = document.createElement('footer');
mmmhhhBC.append(mmmhhhFooter);
let mmmhhhAss = createNode('cite', null, {title: 'Source Title'}, 'Someone with a great ass', mmmhhhFooter);

let footer = createNode('div', ['row', 'footer'], null, null, jumbotron);
let footerRightsCol = createNode('div', ['col-md-6'], null, null, footer);
let footerRights = createNode('p', ['small-text'], null, 'All rights and lefts reserved.', footerRightsCol);
let footerRightsCol2 = createNode('div', ['col-md-6'], null, null, footer);
const list2 = document.createElement('ul');
footerRightsCol2.append(list2);

let frag2 = document.createDocumentFragment();
for (let i = 0; i < 4; i++) {
    const listItem = createNode('li', null, null, null, list2);
    const listLink = createNode('a', null, {href: ArrHref[i], target: '_blank'}, ArrLink[i], listItem);
    frag2.append(listItem);

    if (i === 0) {
        listItem.insertAdjacentText('afterbegin', 'Made as a ');
        listItem.insertAdjacentText('beforeend', ' project');
    }
}
list2.append(frag2);




