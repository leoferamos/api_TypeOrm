import { PlaylistRepositories } from "../../repositories/playlist/PlaylistRepositories";
import { getCustomRepository } from "typeorm";
interface IPlaylistRequest {
    name: string; autor: string;  tempo: string; datal:string;
  }  
  class CreatePlaylistService {
    async execute({ name, autor, tempo, datal }: IPlaylistRequest) {       
      console.log("teste")    
      const playlistRepository = getCustomRepository(PlaylistRepositories);     
      var vplaylist = {
       id:1, name:name, autor:autor, tempo:tempo, datal:datal
      } 
      const playlist = playlistRepository.create(
        {
        name,
        autor,
        tempo,
        datal
      });
      await playlistRepository.save(playlist);  
      return playlist;
    }
  }  
  export { CreatePlaylistService };