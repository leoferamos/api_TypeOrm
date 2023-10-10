import { getCustomRepository } from "typeorm";
import { PlaylistRepositories } from "../../repositories/playlist/PlaylistRepositories";
class ListPlaylistService {
  async execute() {
    const playlistRepositories = getCustomRepository(PlaylistRepositories);

    const playlist = await playlistRepositories.find();

    return playlist;
  }
}

export { ListPlaylistService };


