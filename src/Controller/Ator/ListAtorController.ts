import { Request, Response } from "express";
import { ListGeneroService } from "../../service/Ator/ListAtorService";

class ListGeneroController {
  async handle(request: Request, response: Response) {
  
    const listGeneroService = new ListGeneroService();

    const genero = await listGeneroService.execute();

    return response.json(genero);

  }
}

export { ListGeneroController };