import { getCustomRepository } from "typeorm";
import { AlbumRepositories } from "../../repositories/album/AlbumRepositories";
import { Album } from "../../entities/Album";
interface IAlbumRequest {
    id: string;    nomealbum:string;     data:Date;    autor: string; 
  }  
  class UpdateAlbumService {
    async execute({ id, nomealbum, data, autor }: IAlbumRequest) {
     
      const albumRepository = getCustomRepository(AlbumRepositories);
      const albumAlreadyExists = await albumRepository.findOne({
        id,
      });
      if (!albumAlreadyExists) {
          throw new Error("Álbum não existe")      }
     
      albumAlreadyExists.nomealbum=nomealbum
      albumAlreadyExists.data=data
      albumAlreadyExists.updated_at=new Date()
      albumAlreadyExists.autor=autor
      
      const album= await albumRepository.update(id,albumAlreadyExists)
      
      return album;  
      
    }
  }
  
  export { UpdateAlbumService };