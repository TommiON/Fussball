import { Trait } from "./trait";
import { Skill } from "./skill";
import { Birthday } from "./birthday";
import { Footedness } from "./footedness";
import { Name } from "./name";
import { Form } from "./form"
import { randomizer } from "../../utils/randomizer";

export class Player {
    name: Name;
    birthday: Birthday;

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
        this.name = new Name();
        this.foot = new Footedness();
        this.birthday = new Birthday();
    }
}