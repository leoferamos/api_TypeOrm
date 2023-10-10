import { Request, Response } from "express";
import { ListAlbumService } from "../../service/Filme/ListAlbumService";


class ListAlbumController {
  async handle(request: Request, response: Response) {
  
    const listAlbumService = new ListAlbumService();

    const album = await listAlbumService.execute();

    return response.json(album);

  }
}

export { ListAlbumController };