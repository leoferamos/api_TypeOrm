import { Request, Response } from "express";
import { CreatePlaylistService } from "../../service/Avaliacao/CreatePlaylistService";
class CreatePlaylistController {
    async handle(request: Request, response: Response) {
        const { name, autor, tempo, datal }=request.body;
        console.log(name)
        console.log(autor)
        console.log(tempo)
        console.log(datal)
        const playlist = {
            name:name,
            autor:autor,
            tempo:tempo,
            datal:datal
        };
        const createPlaylistService  = new CreatePlaylistService();
        const ret = await  createPlaylistService.execute(playlist);
        return response.json(ret);
    }
}
export { CreatePlaylistController };