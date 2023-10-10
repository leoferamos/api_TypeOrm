import { AlbumRepositories } from "../../repositories/album/AlbumRepositories";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
import { Album } from "../../entities/Album";
interface IAlbumRequest {
    nomealbum: string;
    data: Date;
    autor: string;
   
  }  
  class CreateAlbumService {
    async execute({ nomealbum, data, autor }: IAlbumRequest) {       
      console.log("teste")    
      const AlbumsRepository = getCustomRepository(AlbumRepositories);
      if (!nomealbum) {
        throw new Error("Nome do álbum incorreto");     }  
      var valbum = {
       id:1, nomealbum:nomealbum, data:data, autor:autor
      }
      
      const album = AlbumsRepository.create(
        {
       nomealbum,
        data,
        autor,
      });
      await AlbumsRepository.save(album);  
      return album;
    }
  }  
  export { CreateAlbumService };


  