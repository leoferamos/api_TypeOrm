import { getCustomRepository } from "typeorm";
import { GeneroRepositories } from "../../repositories/genero/GeneroRepositories";

interface IGeneroDelete {
    id: string;
}
class DeleteGeneroService {
  async execute({id}:IGeneroDelete) {

    
      const GeneroRepository = getCustomRepository(GeneroRepositories);

      const GeneroAlreadyExists = await GeneroRepository.findOne({
        id,
      });

      if (!GeneroAlreadyExists) {
          throw new Error("User not exists");
      }

      const ret = await GeneroRepository.delete(id);
      
      var messagmsgeDelete = {
        message:"Registro excluido com sucesso"
      }
  
      return messagmsgeDelete;
  }
}
export { DeleteGeneroService };