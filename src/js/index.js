// Main js file
// see more: https://github.com/vedees/webpack-template/blob/master/README.md#import-js-files

const checkRadioButRightS = document.querySelector('.section__vectorRightS');
const checkRadioButLeftS = document.querySelector('.section__vectorLeftS');

const checkRadioButRightP = document.querySelector('.section__vectorRightP');
const checkRadioButLeftP = document.querySelector('.section__vectorLeftP');

const checkRadioButRightI = document.querySelector('.section__vectorRightI');
const checkRadioButLeftI = document.querySelector('.section__vectorLeftI');

const checkRadioButRightH = document.querySelector('.section__vectorRightH');
const checkRadioButLeftH = document.querySelector('.section__vectorLeftH');

const checkRadioButRightIn = document.querySelector('.section__vectorRightIn');
const checkRadioButLeftIn = document.querySelector('.section__vectorLeftIn');


const sectionRadioButtonHall = document.querySelector('.section__radioButtonHall');
const inputHall = document.querySelector('.section__ihall');

const sectionRadioButtonSmoke = document.querySelector('.section__radioButtonSmoke');
const inputSmoke = document.querySelector('.section__ismoke');

const sectionRadioButtonPet = document.querySelector('.section__radioButtonPet');
const inputPet = document.querySelector('.section__ipet ');

const sectionRadioButtonInvite = document.querySelector('.section__radioButtonInvite');
const inputInvite = document.querySelector('.section__iinvite');

const sectionRadioButtonInvalid = document.querySelector('.section__radioButtonInvalid');
const inputInvalid = document.querySelector('.section__iinvalid');



sectionRadioButtonSmoke.addEventListener('click', function() {
    if(!inputSmoke.checked) {
        checkRadioButRightS.style.opacity = '1';
        checkRadioButLeftS.style.opacity = '1';
    } else {
        checkRadioButRightS.style.opacity = '0';
        checkRadioButLeftS.style.opacity = '0';
    }
    sectionRadioButtonSmoke.classList.toggle('bor');
    console.log(sectionRadioButtonSmoke);
});

sectionRadioButtonPet.addEventListener('click', function() {
    if(!inputPet.checked) {
        checkRadioButRightP.style.opacity = '1';
        checkRadioButLeftP.style.opacity = '1';
    } else {
        checkRadioButRightP.style.opacity = '0';
        checkRadioButLeftP.style.opacity = '0';
    }
});

sectionRadioButtonInvite.addEventListener('click', function() {
    if(!inputInvite.checked) {
        checkRadioButRightI.style.opacity = '1';
        checkRadioButLeftI.style.opacity = '1';
    } else {
        checkRadioButRightI.style.opacity = '0';
        checkRadioButLeftI.style.opacity = '0';
    }
});

sectionRadioButtonHall.addEventListener('click', function() {
    if(!inputHall.checked) {
        checkRadioButRightH.style.opacity = '1';
        checkRadioButLeftH.style.opacity = '1';
    } else {
        checkRadioButRightH.style.opacity = '0';
        checkRadioButLeftH.style.opacity = '0';
    }
});

sectionRadioButtonInvalid.addEventListener('click', function() {
    if(!inputInvalid.checked) {
        checkRadioButRightIn.style.opacity = '1';
        checkRadioButLeftIn.style.opacity = '1';
    } else {
        checkRadioButRightIn.style.opacity = '0';
        checkRadioButLeftIn.style.opacity = '0';
    }
});
