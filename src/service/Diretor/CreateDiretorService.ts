import { MusicasRepositories } from "../../repositories/musica/MusicaRepositories";
import { getCustomRepository } from "typeorm";

interface IMusicaRequest {
    name: string; temp: string; ano: Date; artista: string; letra: string;
  }  
  class CreateMusicaService {
    async execute({ name, temp, ano, artista, letra }: IMusicaRequest) {       
      console.log("teste")    
      const musicasRepository = getCustomRepository(MusicasRepositories);     
      var vmusica = {
       id:1, name:name, temp:temp, ano:ano, artista:artista, letra:letra
      } 
      const musica = musicasRepository.create(
        {
        name, temp, ano, artista, letra
      });
      await musicasRepository.save(musica);  
      return musica;
    }
  }  
  export { CreateMusicaService };