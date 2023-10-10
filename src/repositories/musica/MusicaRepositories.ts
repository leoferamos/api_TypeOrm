import { EntityRepository, Repository } from "typeorm";
import { Musica } from "../../entities/Musica";

@EntityRepository(Musica)
class MusicasRepositories extends Repository<Musica> {}

export { MusicasRepositories };