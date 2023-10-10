import { Request, Response } from "express";
import { CreateAlbumService } from "../../service/Filme/CreateAlbumService"
class CreateAlbumController {
    async handle(request: Request, response: Response) {
     const { nomealbum, data, autor } = request.body;
     console.log(nomealbum);
     console.log(data);
     console.log(autor);  
     const album = {
        nomealbum:nomealbum,
        data:data,
        autor:autor
      }; 
      const createAlbumService  = new CreateAlbumService();
      const ret = await  createAlbumService.execute(album);
      return response.json(ret);
  
    }
  }
  export { CreateAlbumController };