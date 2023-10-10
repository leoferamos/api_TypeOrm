import { getCustomRepository } from "typeorm";
import { GeneroRepositories } from "../../repositories/genero/GeneroRepositories";
import { hash } from "bcryptjs";
interface IGeneroRequest {
    id: string;    nomegenero:string;
  }  
  class UpdateGeneroService {
    async execute({ id, nomegenero, }: IGeneroRequest) {
     
      const generoRepository = getCustomRepository(GeneroRepositories);
      const generoAlreadyExists = await generoRepository.findOne({
        id,
      });
      if (!generoAlreadyExists) {
          throw new Error("User not exists")      }
      generoAlreadyExists.nomegenero=nomegenero
      generoAlreadyExists.updated_at=new Date()
      
      const genero= await generoRepository.update(id,generoAlreadyExists)
      
      return genero;  
      
    }
  }
  
  export { UpdateGeneroService };