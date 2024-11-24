import { Trait } from "./trait";
import { Skill } from "./skill";
import { Birthday } from "./birthday";
import { Footedness } from "./footedness";

export class Player {
    firstName: string;
    lastName: string;
    birthday: Birthday;

    foot: Footedness;
    
    traits: Trait[];

    // physical
    stamina: Skill;
    ruggedness: Skill;
    pace: Skill;

    // tactical & mental
    vision: Skill;
    positioning: Skill;
    experience: Skill;

    // technical
    heading: Skill;
    
    constructor() {
        this.foot = new Footedness();
        
    }
}