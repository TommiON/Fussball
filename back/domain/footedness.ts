export class Footedness {
    value: 'right' | 'left' | 'both';

    constructor() {
        const randonNumber = Math.random();
        if (randonNumber > 0.99) {
            this.value = 'both';
        } else if (randonNumber > 0.8) {
            this.value = 'left';
        } else {
            this.value = 'right';
        }
    }
}