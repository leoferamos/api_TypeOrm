import { getCustomRepository } from "typeorm";
import { MusicasRepositories } from "../../repositories/musica/MusicaRepositories";

interface IMusicaRequest {
    id: string;    name: string;  temp:string, ano: Date, artista:string; letra:string
  }  
  class UpdateMusicaService {
    async execute({ id, name, temp, ano, artista, letra}: IMusicaRequest) {
     
      const musicasRepository = getCustomRepository(MusicasRepositories);
      const musicaAlreadyExists = await musicasRepository.findOne({
        id,
      });
      if (!musicaAlreadyExists) {
          throw new Error("Music not exists")      }
      
      musicaAlreadyExists.name=name
      musicaAlreadyExists.temp=temp
      musicaAlreadyExists.ano=ano
      musicaAlreadyExists.artista=artista
      musicaAlreadyExists.letra=letra
      musicaAlreadyExists.updated_at=new Date()
      
      
      const musica = await musicasRepository.update(id,musicaAlreadyExists);
      
      return musica;  
    }
}
export {UpdateMusicaService}