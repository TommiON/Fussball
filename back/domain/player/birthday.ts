import { randomizer } from "../../utils/randomizer";

export class Birthday {
    value: Date;

    constructor() {
        let birthdate = new Date();

        birthdate.setFullYear(this.generateYear());
        birthdate.setMonth(this.generateMonth());
        birthdate.setDate(this.generateDay(birthdate.getMonth()));
        
        this.value = birthdate;
    }

    // todo
    currentAge() {
        
    }

    generateYear() {
        const age = randomizer([18,17,16], [40,80,100])
        return new Date().getFullYear() - age;
    }

    // todo
    generateMonth() {
       return randomizer([0,1,2,3,4,5,6,7,8,9,10,11]);
    }

    // todo
    generateDay(month : number) {
        const day = randomizer([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30,31]);

        if ((month == 2 || month == 4 || month == 6 || month == 9 || month == 11) && day > 28) {
            this.generateDay(month);
        }

        return day;
    }
}