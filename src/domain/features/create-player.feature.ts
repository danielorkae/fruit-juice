import { Player } from "../entity/player";
import { IPlayerRepository } from "../repositories/player.repository";

type CreatePlayerParams = {
  name: string;
  steamId: string;
  gamersClubId?: string;
  vacBanned?: boolean;
};

export class CreatePlayer implements Feature<CreatePlayerParams, Player> {
  constructor(private playerRepository: IPlayerRepository) {
    //
  }

  execute(params: CreatePlayerParams): Player {
    const player = new Player({
      name: params.name,
      steamId: params.steamId,
      gamersClubId: params.gamersClubId || "",
      vacBanned: params.vacBanned || false,
    });

    this.playerRepository.save(player);

    return player;
  }
}
