'use strict';

function getGenerationPasword(length, lowercase, uppercase, numbers) {
    let result = '';
    let caseSymbols = '';
    if (lowercase.toString() === 'true') {
        caseSymbols += 'abcdefghijklmnopqrstuvwxyz';
    }
    if (uppercase.toString() === 'true') {
        caseSymbols += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    }
    if (numbers.toString() === 'true') {
        caseSymbols += '0123456789';
    }
    const charactersLength = caseSymbols.length;
    if (charactersLength === 0) {
        caseSymbols = 'abcdefghijklmnopqrstuvwxyz';
    }
    if (length <= 0) {
        length = 8;
    }
    for (let i = 0; i < length; i++) {
        result += caseSymbols.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;

}

module.exports = {getGenerationPasword}