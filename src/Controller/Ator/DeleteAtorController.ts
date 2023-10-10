import { Request, Response } from "express";
import { DeleteGeneroService } from "../../service/Ator/DeleteGeneroService";

class DeleteGeneroController {
  async handle(request: Request, response: Response) {
    const deleteGeneroService = new DeleteGeneroService();
    const id= request.params.id;
    const generos = await deleteGeneroService.execute({id});

    return response.json(generos);
  }
}

export { DeleteGeneroController };