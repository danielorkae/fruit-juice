import { Player } from "../entity/player";

export interface IPlayerRepository {
  get(id: string): Player;
  save(player: Player): void;
}
