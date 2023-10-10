import { Request, Response } from "express";
import { UpdateUserService } from "../../service/user/UpdateUserService";

class UpdateUserController {

  async handle(request: Request, response: Response) {
    const { id, name, email, admin, password, sexo, idade, apelido} = request.body;

    const updateUserService = new UpdateUserService();

    const user = await updateUserService.execute({id,
      name,
      email,
      admin,
      password,
      sexo,
      idade,
      apelido,
    });
    return response.json(user);
  }
}

export { UpdateUserController };