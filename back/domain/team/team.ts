import { Player } from "../player/player";

export class Team {
    players: Array<Player> = new Array();

    constructor() {
        for (let i = 0; i < 16; i++) {
            this.players.push(new Player());
        }
    }
}