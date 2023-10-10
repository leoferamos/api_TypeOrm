import { Request, Response } from "express";
import { ListMusicaService } from "../../service/Diretor/ListMusicaService";

class ListMusicaController {
  async handle(request: Request, response: Response) {
  
    const listMusicasService = new ListMusicaService();

    const musicas = await listMusicasService.execute();

    return response.json(musicas);

  }
}

export { ListMusicaController };