import { Trait } from "./trait";
import { Skill } from "./skill";
import { Footedness } from "./footedness";
import { Form } from "./form"
import { generateName, generateFootedness, generateBirthDay } from "./playerFactory";

export class Player {
    name: string;
    birthday: Date;

    form: Form;
    
    foot: Footedness;
    traits: Trait[];

    stamina: Skill;
    ruggedness: Skill;
    pace: Skill;

    vision: Skill;
    positioning: Skill;
    experience: Skill;

    heading: Skill;
    shooting: Skill;
    shortPassing: Skill;
    longPassing: Skill;
    ballControl: Skill;
    tackling: Skill;
    goalkeeping: Skill;
    dribbling: Skill;
    
    constructor() {
        this.name = generateName();
        this.foot = generateFootedness();
        this.birthday = generateBirthDay();

    }
}