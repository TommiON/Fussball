import { getRandomElement, getRandomNumberInRange } from "../../utils/randomizer";
import { possibleFirstNames, possibleLastNames } from "../../utils/fixtures";
import { Footedness } from "./footedness";
import { Trait } from "./trait";

export function generateFootedness() : Footedness {
    return getRandomElement(['right', 'left', 'both'], [79, 99, 100]);
}

export function generateName() : string {
    return getRandomElement(possibleFirstNames) + ' ' + getRandomElement(possibleLastNames);
}

export function generateBirthDay(): Date {
    let birthdate = new Date();

    const ageYears = getRandomElement([18,17,16], [40,80,100]);
    birthdate.setFullYear(new Date().getFullYear() - ageYears);

    birthdate.setMonth(getRandomElement([0,1,2,3,4,5,6,7,8,9,10,11]));

    let day = getRandomElement([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]);
    if ((birthdate.getMonth() == 2 || birthdate.getMonth() == 4 || birthdate.getMonth() == 6 
            || birthdate.getMonth() == 9 || birthdate.getMonth() == 11) && day > 28) {
        day = day - 10;
    }
    birthdate.setDate(day);
        
    return birthdate;
}

export function generateSkill() : number {
    return getRandomElement([1,2,3,4,5,6,7,8,9,10], [3,6,10,30,50,70,90,93,97,100]);
}

export function generateTraits() : Trait[] {
    let traits : Trait[] = [];
    
    const trait1 = getRandomElement([null,'Monster throw-in','Angry','Moody','Unpredictable','Loyal','Fragile','Tall'], [80]);

    if (trait1) {
        traits.push(trait1);
        const trait2 = getRandomElement([null,'Monster throw-in','Angry','Moody','Unpredictable','Loyal','Fragile','Tall'], [80]);
            if (trait2 && trait1 !== trait2) {
                traits.push(trait2);
            }
    }

    return traits;
}
