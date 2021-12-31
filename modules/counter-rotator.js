import { displayTotal } from './display-total.js';
var countNum = 0;

export const counterRotator = (displayNumber, numberSlot) => {
    //Increment number in each "number-slot" element
    let counter = setInterval(() => {
        numberSlot.forEach((number) => {
            if(countNum <= 9) {
                number.innerHTML = countNum;
                countNum += Math.ceil(Math.random(1));
            } else {
                countNum = 0;
            }
        });
    }, 25);

    //Stop counter rotation
    let timer = setTimeout(() => {
        clearInterval(counter);
        clearTimeout(timer);

        //Construct final total number
        displayTotal(displayNumber);
    }, 2500);
}