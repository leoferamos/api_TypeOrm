import { Request, Response } from "express";
import { UpdatePlaylistService } from "../../service/Avaliacao/UpdatePlaylistService";

class UpdatePlaylistController {

    async handle(request: Request, response: Response) {
        const { id, name, autor, tempo, datal } = request.body;

        const updatePlaylistService = new UpdatePlaylistService();

        const playlist = await updatePlaylistService.execute({id,
           name, autor,   tempo, datal         
        });
        return response.json(playlist);
    }
}
export { UpdatePlaylistController};