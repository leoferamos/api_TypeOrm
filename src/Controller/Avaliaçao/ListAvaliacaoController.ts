import { Request, Response } from "express";
import { ListPlaylistService } from "../../service/Avaliacao/ListPlaylistService";

class ListPlaylistController {
  async handle(request: Request, response: Response) {
  
    const listPlaylistService = new ListPlaylistService();

    const playlist = await listPlaylistService.execute();

    return response.json(playlist);

  }
}

export { ListPlaylistController };