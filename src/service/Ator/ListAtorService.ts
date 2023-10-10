import { getCustomRepository } from "typeorm";
import { GeneroRepositories } from "../../repositories/genero/GeneroRepositories";
class ListGeneroService {
  async execute() {
    const generoRepositories = getCustomRepository(GeneroRepositories);

    const genero = await generoRepositories.find();

    return genero;
  }
}

export { ListGeneroService };