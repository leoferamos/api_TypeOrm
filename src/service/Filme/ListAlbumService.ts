import { getCustomRepository } from "typeorm";
import { AlbumRepositories } from "../../repositories/album/AlbumRepositories";
class ListAlbumService {
  async execute() {
    const albumRepositories = getCustomRepository(AlbumRepositories);

    const album = await albumRepositories.find();

    return album;
  }
}

export { ListAlbumService };