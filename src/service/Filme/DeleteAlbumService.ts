import { getCustomRepository } from "typeorm";
import { AlbumRepositories } from "../../repositories/album/AlbumRepositories";

interface IAlbumDelete {
    id: string;
}
class DeleteAlbumService {
  async execute({id}:IAlbumDelete) {

    
      const AlbumRepository = getCustomRepository(AlbumRepositories);

      const AlbumAlreadyExists = await AlbumRepository.findOne({
        id,
      });

      if (!AlbumAlreadyExists) {
          throw new Error("Álbum não existe");
      }

      const ret = await AlbumRepository.delete(id);
      
      var messagmsgeDelete = {
        message:"Album excluido com sucesso!"
      }
  
      return messagmsgeDelete;
  }
}
export { DeleteAlbumService };