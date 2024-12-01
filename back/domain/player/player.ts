import { Trait } from "./trait";
import { Skill } from "./skill";
import { Birthday } from "./birthday";
import { Footedness } from "./footedness";
import { Name } from "./name";
import { randomizer } from "../../utils/randomizer";

export class Player {
    name: Name;
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
    shooting: Skill;
    passingShort: Skill;
    passingLong: Skill;
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