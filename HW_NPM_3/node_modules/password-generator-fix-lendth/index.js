'use strict';

// Написать свою собственную библиотеку и опубликовать в NPM.

function getRandomPassword(length, lowercase, uppercase, numbers, symbols) {
    let result = '';
    let chars = '';
    if (lowercase.toString() === 'true') {
        chars += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (uppercase.toString() === 'true') {
        chars += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (numbers.toString() === 'true') {
        chars += '0123456789';
    }
    if (symbols.toString() === 'true') {
        chars += '!@#$%^&*()-._~+|/';
    }
    const charactersLength = chars.length;
    if (charactersLength === 0) {
        chars = 'abcdefghijklmnopqrstuvwxyz';
    }
    if (length <= 0) {
        length = 8;
    }
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result.toString();

}

module.exports = { getRandomPassword, }