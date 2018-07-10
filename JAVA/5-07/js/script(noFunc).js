'use strict';

const jumbotron = document.querySelector('.jumbotron');

//create

const titlecontainer = document.createElement('div');
const h1 = document.createElement('h1');
const deadpoolSpan = document.createElement('span');
const deadpoolP = document.createElement('p');
const deadpoolSpan2 = document.createElement('span');

const imgContainer = document.createElement('div');
const mainImg = document.createElement('img');

const subTitleCont = document.createElement('div');
const subTitle = document.createElement('h1');

const listCont = document.createElement('div');
const list = document.createElement('ul');

const mainImageContainer = document.createElement('div');
const mainImg2 = document.createElement('img');

const mmmhhhCont = document.createElement('div');
const mmmhhhDiv = document.createElement('div');






//add class

titlecontainer.classList.add('row', 'title-container');
h1.classList.add('text-center');
deadpoolSpan.classList.add('red-text');
deadpoolP.classList.add('text-center');
deadpoolSpan2.classList.add('red-text');

imgContainer.classList.add('row');
mainImg.classList.add('img-responsive', 'inside-shadow');

subTitleCont.classList.add('row', 'sub-title-container');
subTitle.classList.add('text-center');

listCont.classList.add('row', 'list-container');

mainImageContainer.classList.add('row');
mainImg2.classList.add('img-responsive', 'inside-shadow');

mmmhhhCont.classList.add('row');
mmmhhhDiv.classList.add('col-ls-6', 'col-ls-offset-3', 'col-md-6', 'col-md-offset-3');






//add atribute

imgContainer.setAttribute('id', 'main-image-container');
mainImg.setAttribute('src', 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool1-gallery-image.jpg');
mainImg.setAttribute('alt', 'picture');

mainImageContainer.setAttribute('id', 'main-image-container');
mainImg2.setAttribute('src', 'http://s3.foxfilm.com/foxmovies/production/films/103/images/gallery/deadpool-gallery-06-gallery-image.jpg');
mainImg2.setAttribute('alt', 'picture');





//clone

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

let frag = document.createDocumentFragment();
for (let i = 0; i <= 10; i++) {
    // let clonedListItem = listItem.cloneNode(false);
    // let clonedListSpan = listSpan.cloneNode(false);

    // clonedListItem.textContent = ArrItem[i];
    // clonedListSpan.textContent = ArrSpan[i];

    const listItem = document.createElement('li');
    const listSpan = document.createElement('span');

    listItem.classList.add('list-item');
    listSpan.classList.add('red-text');

    listItem.textContent = ArrItem[i];
    listSpan.textContent = ArrSpan[i];

    listItem.prepend(listSpan);
    frag.append(listItem);
}



//add text

h1.textContent = ' TRIBUTE PAGE';
deadpoolSpan.textContent = 'DEADPOOL';
deadpoolP.textContent = 'WITH GREAT POWER COMES GREAT ';
deadpoolSpan2.textContent = 'IRRESPONSIBILITY';

subTitle.textContent = 'TIMELINE';






//paste

jumbotron.append(titlecontainer);
titlecontainer.append(h1);
h1.prepend(deadpoolSpan);
titlecontainer.append(deadpoolP);
deadpoolP.append(deadpoolSpan2);

jumbotron.append(imgContainer);
imgContainer.append(mainImg);

jumbotron.append(subTitleCont);
subTitleCont.append(subTitle);

jumbotron.append(listCont);
listCont.append(frag);

jumbotron.append(mainImageContainer);
mainImageContainer.append(mainImg2);

let clonedSubTitleCont = subTitleCont.cloneNode(true);
jumbotron.append(clonedSubTitleCont);
clonedSubTitleCont.children[0].textContent = 'QUOTE';

jumbotron.append(mmmhhhCont);
mmmhhhCont.append(mmmhhhDiv);








