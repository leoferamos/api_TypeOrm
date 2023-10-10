import { Request, Response } from "express";
import { DeleteAlbumService } from "../../service/Filme/DeleteAlbumService";

class DeleteAlbumController {
  async handle(request: Request, response: Response) {
    const deleteAlbumService = new DeleteAlbumService();
    const id= request.params.id;
    const album = await deleteAlbumService.execute({id});

    return response.json(album);
  }
}

export { DeleteAlbumController };