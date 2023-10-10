import { getCustomRepository } from "typeorm";
import { PlaylistRepositories } from "../../repositories/playlist/PlaylistRepositories";

interface IPlaylistRequest {
    id: string;    name: string;   autor:string;  tempo:string; datal:string;  
  }  
  class UpdatePlaylistService {
    async execute({ id, name, autor, tempo, datal}: IPlaylistRequest) {
     
      const playlistRepository = getCustomRepository(PlaylistRepositories);
      const playlistAlreadyExists = await playlistRepository.findOne({
        id,
      });
      if (!playlistAlreadyExists) {
          throw new Error("Playlist not exists")      }
      
      playlistAlreadyExists.name=name
      playlistAlreadyExists.autor=autor
      playlistAlreadyExists.tempo=tempo
      playlistAlreadyExists.datal=datal
      playlistAlreadyExists.updated_at=new Date()
      
      
      const playlist= await playlistRepository.update(id,playlistAlreadyExists);
      
      return playlist;  
      }
    }

    export {UpdatePlaylistService}