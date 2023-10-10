import { Request, Response } from "express";
import { CreateMusicaService } from "../../service/Diretor/CreateMusicaService";
class CreateMusicaController {
    async handle(request: Request, response: Response) {
        const { name, temp, artista, ano, letra }=request.body;
        console.log(name)
        console.log(temp)
        console.log(artista)
        console.log(ano)
        console.log(letra)
        const musica = {
            name:name,
            temp:temp,
            artista:artista,
            ano:ano,
            letra:letra
        };
        const createMusicaService  = new CreateMusicaService();
        const ret = await  createMusicaService.execute(musica);
        return response.json(ret);
    }
}
export { CreateMusicaController };