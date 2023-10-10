import { Router } from "express";
import { CreateUserController } from "./Controller/User/CreateUserController";
import { DeleteUserController } from "./Controller/User/DeleteUserController";
import { ListUserController } from "./Controller/User/ListUserController";
import { UpdateUserController } from "./Controller/User/UpdateAlbumController";

import { CreateAlbumController } from "./Controller/Album/CreateAlbumController";
import { DeleteAlbumController } from "./Controller/Album/DeleteAlbumController";
import { ListAlbumController } from "./Controller/Album/ListAlbumController";
import { UpdateAlbumController } from "./Controller/Album/UpdateAlbumController";

import { CreateGeneroController } from "./Controller/Genero/CreateGeneroController";
import { DeleteGeneroController } from "./Controller/Genero/DeleteGeneroController";
import { ListGeneroController } from "./Controller/Genero/ListGeneroController";
import { UpdateGeneroController } from "./Controller/Genero/UpdateGeneroController";

import { CreateMusicaController } from "./Controller/Musica/CreateMusicaController";
import { DeleteMusicaController } from "./Controller/Musica/DeleteMusicaController";
import { ListMusicaController } from "./Controller/Musica/ListMusicaController";
import { UpdateMusicaController } from "./Controller/Musica/UpdateMusicaController";

import { CreatePlaylistController } from "./Controller/Playlist/CreatePlaylistController";
import { DeletePlaylistController } from "./Controller/Playlist/DeletePlaylistController";
import { ListPlaylistController } from "./Controller/Playlist/ListPlaylistController";
import { UpdatePlaylistController } from "./Controller/Playlist/UpdatePlaylistController";


import { AuthenticateUserController } from "./Controller/Authencation/AuthenticationController";
import { ensureAuthenticated } from "./middleware/ensureAuthenticated";

const createUserController = new CreateUserController();
const deleteUserController = new DeleteUserController();
const listusercontroller = new ListUserController();
const updateusercontroller = new UpdateUserController();
const authenticationUserController = new AuthenticateUserController();

const createAlbumController = new CreateAlbumController();
const deleteAlbumController = new DeleteAlbumController();
const listAlbumcontroller = new ListAlbumController();
const updateAlbumcontroller = new UpdateAlbumController();

const createMusicaController = new CreateMusicaController();
const deleteMusicaController = new DeleteMusicaController();
const listMusicacontroller = new ListMusicaController();
const updateuMusicacontroller = new UpdateMusicaController();

const createGeneroController = new CreateGeneroController();
const deleteGeneroController = new DeleteGeneroController();
const listGenerocontroller = new ListGeneroController();
const updateGenerocontroller = new UpdateGeneroController();

const createPlaylistController = new CreatePlaylistController();
const deletePlaylistController = new DeletePlaylistController();
const listPlaylistController = new ListPlaylistController();
const updatePlaylistcontroller = new UpdatePlaylistController();

const router = Router();

router.post("/login", authenticationUserController.handle);
router.post("/users", createUserController.handle);

router.use(ensureAuthenticated)
router.get("/users", listusercontroller.handle);
router.put("/users", updateusercontroller.handle);
router.delete("/users/:id", deleteUserController.handle);








export {router}

