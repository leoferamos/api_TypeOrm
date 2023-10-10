import { getCustomRepository } from "typeorm";
import { MusicasRepositories } from "../../repositories/musica/MusicaRepositories";

interface IMusicaDelete {
    id: string;
};
class DeleteMusicaService {
  async execute({id}:IMusicaDelete) {

    
      const musicasRepository = getCustomRepository(MusicasRepositories);

      const musicaAlreadyExists = await musicasRepository.findOne({
        id,
      });

      if (!musicaAlreadyExists) {
          throw new Error("Music not exists");
      }

      const ret = await musicasRepository.delete(id);
      
      var messagmsgeDelete = {
        message:"Registro excluido com sucesso"
      };
  
      return messagmsgeDelete;
  }
}
export { DeleteMusicaService };