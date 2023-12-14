'use strict';

const randomPassword = require('./index.js');
let length = 8;
let lowCase = false;
let uppCase = false;
let numCase = false;

process.argv.forEach((val, index) => {
    if (val.trim().startsWith('length')) {
        length = Number(val.trim().replace('length=', ''));
        console.log(length);
    }
    if (val.trim().startsWith('lowCase')) {
        lowCase = val.trim().replace('lowCase=', '');
        if (lowCase === 'true') {
            lowCase = true;
        }
        console.log(lowCase)
    }
    if (val.trim().startsWith('uppCase')) {
        uppCase = val.trim().replace('uppCase=', '');
        if (uppCase === 'true') {
            uppCase = true;
        }
        console.log(uppCase)
    }
    if (val.trim().startsWith('numCase')) {
        numCase = val.trim().replace('numCase=', '');
        if (numCase === 'true') {
            numCase = true;
        }
        console.log(numCase)
    }
    
})
console.log(randomPassword.getGenerationPasword(length, lowCase, uppCase, numCase));