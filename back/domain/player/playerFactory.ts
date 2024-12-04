import { randomizer } from "../../utils/randomizer";
import { possibleFirstNames, possibleLastNames } from "../../utils/fixtures";
import { Footedness } from "./footedness";

export function generateFootedness() : Footedness {
    return randomizer(['right', 'left', 'both'], [79, 99, 100]);
}

export function generateName() : string {
    return randomizer(possibleFirstNames) + ' ' + randomizer(possibleLastNames);
}

export function generateBirthDay(): Date {
    let birthdate = new Date();

    const ageYears = randomizer([18,17,16], [40,80,100]);
    birthdate.setFullYear(new Date().getFullYear() - ageYears);

    birthdate.setMonth(randomizer([0,1,2,3,4,5,6,7,8,9,10,11]));

    let day = randomizer([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]);
    if ((birthdate.getMonth() == 2 || birthdate.getMonth() == 4 || birthdate.getMonth() == 6 
            || birthdate.getMonth() == 9 || birthdate.getMonth() == 11) && day > 28) {
        day = day -10;
    }
    birthdate.setDate(day);
        
    return birthdate;
}