import { EntityRepository, Repository } from "typeorm";
import { Album } from "../../entities/Album";

@EntityRepository(Album)
class AlbumRepositories extends Repository<Album> {}

export { AlbumRepositories };