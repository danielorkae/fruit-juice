import { Entity } from "./base/entity";

type PlayerAttributes = {
    name: string;
    steamId: string;
    gamersClubId: string;
    vacBanned: boolean;
}

export class Player extends Entity<PlayerAttributes> {
    constructor (attributes: PlayerAttributes) {
        super(attributes);
    }
}
