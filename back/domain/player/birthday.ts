export class Birthday {
    value: Date;

    constructor() {
        let birthdate = new Date();

        birthdate.setFullYear(this.generateYear());
        birthdate.setMonth(this.generateMonth());
        birthdate.setDate(this.generateDay());
        
        this.value = birthdate;
    }

    // todo
    currentAge() {
        
    }

    generateYear() {
        let randonNumber = Math.random();
        if (randonNumber > 0.60) {
            return new Date().getFullYear() - 18;
        } else if (randonNumber > 0.2) {
            return new Date().getFullYear() - 17;
        } else {
            return new Date().getFullYear() - 16;
        }
    }

    // todo
    generateMonth() {
       return 2;
    }

    // todo
    generateDay() {
        return 17;
    }
}