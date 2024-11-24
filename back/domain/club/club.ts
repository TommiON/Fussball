import { Team } from "../team/team";

export class Club {
    name: string;
    team: Team;
    established: Date;

    constructor(name: string) {
        this.name = name;
        this.established = new Date();
        this.team = new Team();
    }
}