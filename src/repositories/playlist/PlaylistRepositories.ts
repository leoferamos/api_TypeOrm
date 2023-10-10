import { EntityRepository, Repository } from "typeorm";
import { Playlist } from "../../entities/Playlist";

@EntityRepository(Playlist)
class PlaylistRepositories extends Repository<Playlist> {}

export { PlaylistRepositories };