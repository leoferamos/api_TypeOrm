import { getCustomRepository } from "typeorm";
import { PlaylistRepositories } from "../../repositories/playlist/PlaylistRepositories";

interface IPlaylistDelete {
    id: string;
};
class DeletePlaylistService {
  async execute({id}:IPlaylistDelete) {

    
      const playlistRepository = getCustomRepository(PlaylistRepositories);

      const playlistAlreadyExists = await playlistRepository.findOne({
        id,
      });

      if (!playlistAlreadyExists) {
          throw new Error("Playlist not exists");
      }

      const ret = await playlistRepository.delete(id);
      
      var messagmsgeDelete = {
        message:"Registro excluido com sucesso"
      };
  
      return messagmsgeDelete;
  }
}
export { DeletePlaylistService };