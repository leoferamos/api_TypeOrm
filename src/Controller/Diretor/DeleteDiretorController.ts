import { Request, Response } from "express";
import { DeleteMusicaService } from "../../service/Diretor/DeleteMusicaService";

class DeleteMusicaController {
  async handle(request: Request, response: Response) {
    const deleteMusicaService = new DeleteMusicaService();
    const id= request.params.id;
    const musicas = await deleteMusicaService.execute({id});

    return response.json(musicas);
  }
}

export { DeleteMusicaController };