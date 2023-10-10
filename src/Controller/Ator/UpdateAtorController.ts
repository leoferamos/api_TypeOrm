import { Request, Response } from "express";
import { UpdateGeneroService } from "../../service/Ator/UpdateGeneroService";

class UpdateGeneroController {

  async handle(request: Request, response: Response) {
    const { id, nomegenero } = request.body;

    const updateGeneroService = new UpdateGeneroService();

    const genero = await updateGeneroService.execute({id,
      nomegenero,
    });
    return response.json(genero);
  }
}

export { UpdateGeneroController };