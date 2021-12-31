import { container } from './variables.js';
import { counterRotator } from './counter-rotator.js';

export const initCounter = (displayNumber) => {
    let digitLength = displayNumber.length;

    //Create element for each number
    for (let count = 0; count < digitLength; count++) {
        let digitSlot = document.createElement('span');
        
        digitSlot.classList.add('number-slot');
        container.append(digitSlot);
    }
    //Rotate numbers in each "number-slot" element
    counterRotator(displayNumber, getNumberSlots());
}

//Return "number-slot" element collection
const getNumberSlots = () => {
    return document.querySelectorAll('.number-slot');
}