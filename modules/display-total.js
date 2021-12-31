import { container } from './variables.js';
var setNumber = '';

export const displayTotal = (displayNumber) => {
    let digits = displayNumber.split('');

    //Add comma after appropriate digit/s
    digits.forEach((digit, i) => {
        if(
            digits.length == 4 && i == 0 ||
            digits.length == 5 && i == 1 ||
            digits.length == 6 && i == 2 ||
            digits.length == 7 && (i == 0 || i == 3) ||
            digits.length == 8 && (i == 1 || i == 4) ||
            digits.length == 9 && (i == 2 || i == 5) ||
            digits.length == 10 && (i == 0 || i == 3 || i == 6)
        ) {
            setNumber += `${digit},`;
        } else {
            setNumber += `${digit}`;
        }
        //Display fianl total number
        container.innerHTML = setNumber;
    });
}