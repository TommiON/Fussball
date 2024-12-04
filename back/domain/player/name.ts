import { randomizer } from "../../utils/randomizer";
import { possibleFirstNames, possibleLastNames } from "../../utils/fixtures";

export class Name {
    value: string;

    constructor() {
        const firstName = randomizer(possibleFirstNames);
        const lastName = randomizer(possibleLastNames);
        this.value = firstName + ' ' + lastName;
    }
}

