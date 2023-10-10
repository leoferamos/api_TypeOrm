import { Request, Response } from "express";
import { DeletePlaylistService } from "../../service/Avaliacao/DeletePlaylistService";

class DeletePlaylistController {
  async handle(request: Request, response: Response) {
    const deletePlaylistService = new DeletePlaylistService();
    const id= request.params.id;
    const playlists = await deletePlaylistService.execute({id});

    return response.json(playlists);
  }
}

export { DeletePlaylistController };