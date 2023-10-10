import { GeneroRepositories } from "../../repositories/genero/GeneroRepositories";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
import { Genero } from "../../entities/Genero";
interface IGeneroRequest {
    nomegenero: string;
  }  
  class CreateGeneroService {
    async execute({ nomegenero }: IGeneroRequest) {       
      console.log("teste")    
      const GenerosRepository = getCustomRepository(GeneroRepositories);
      if (!nomegenero) {
        throw new Error("Gênero de música");     }  
      var vgenero = {
       id:1, nomegenero:nomegenero,
      }
      
      const genero = GenerosRepository.create(
        {
        nomegenero,
      });
      await GenerosRepository.save(genero);  
      return genero;
    }
  }  
  export { CreateGeneroService };
