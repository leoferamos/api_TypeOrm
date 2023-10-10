import { Request, Response } from "express";
import { CreateGeneroService } from "../../service/Ator/CreateGeneroService";
class CreateGeneroController {
  async handle(request: Request, response: Response) {
   const { nomegenero } = request.body;
   console.log(nomegenero)
   const genero = {
      nomegenero:nomegenero
    }; 
    const createGeneroService  = new CreateGeneroService();
    const ret = await  createGeneroService.execute(genero)
    return response.json(ret);

  }
}
export { CreateGeneroController };