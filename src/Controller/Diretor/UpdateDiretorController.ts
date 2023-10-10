import { Request, Response } from "express";
import { UpdateMusicaService } from "../../service/Diretor/UpdateMusicaService";

class UpdateMusicaController {

    async handle(request: Request, response: Response) {
        const { id, name, temp, ano, artista, letra } = request.body;

        const updateMusicaService = new UpdateMusicaService();

        const musica = await updateMusicaService.execute({id,
           name, temp, ano, artista, letra          
        });
        return response.json(musica);
    }
}
export { UpdateMusicaController};
