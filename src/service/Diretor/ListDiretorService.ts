import { getCustomRepository } from "typeorm";
import { MusicasRepositories } from "../../repositories/musica/MusicaRepositories";
class ListMusicaService {
  async execute() {
    const musicasRepositories = getCustomRepository(MusicasRepositories);

    const musicas = await musicasRepositories.find();

    return musicas;
  }
}

export { ListMusicaService };