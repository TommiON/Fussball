import { randomizer } from "../../utils/randomizer";

export class Footedness {
    value: 'right' | 'left' | 'both';

    constructor() {
        this.value = randomizer(['right', 'left', 'both'], [79, 99, 100])
    }
}