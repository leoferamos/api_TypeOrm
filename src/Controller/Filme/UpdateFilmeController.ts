import { Request, Response } from "express";
import { UpdateAlbumService } from "../../service/Filme/UpdateAlbumService";

class UpdateAlbumController {

  async handle(request: Request, response: Response) {
    const { id, nomealbum, data, autor } = request.body;

    const updateAlbumService = new UpdateAlbumService();

    const album = await updateAlbumService.execute({
      id,
      nomealbum,
      data,
      autor,
    });
    return response.json(album);
  }
}

export { UpdateAlbumController };