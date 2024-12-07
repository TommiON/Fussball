import { Trait } from "./trait";
import { Skill } from "./skill";
import { Footedness } from "./footedness";
import { Form } from "./form"
import { generateName, generateFootedness, generateBirthDay, generateSkill, generateTraits } from "./playerFactory";

export class Player {
    name: string;
    birthday: Date;

    form: Form;
    
    foot: Footedness;
    traits: Trait[];

    stamina: number;
    ruggedness: number;
    pace: number;

    vision: number;
    positioning: number;
    experience: number;

    heading: number;
    shooting: number;
    shortPassing: number;
    longPassing: number;
    ballControl: number;
    tackling: number;
    goalkeeping: number;
    dribbling: number;
    
    constructor() {
        this.name = generateName();
        this.foot = generateFootedness();
        this.birthday = generateBirthDay();

        this.traits = generateTraits();

        this.stamina = generateSkill();
        this.ruggedness = generateSkill();
        this.pace = generateSkill();

        this.experience = 1;

    }
}