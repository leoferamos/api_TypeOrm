import { Request, Response } from "express";
import { CreateUserService } from "../../service/user/CreateUserService";
class CreateUserController {
  async handle(request: Request, response: Response) {
   const { name, email, admin, password, sexo, idade, apelido } = request.body;
   console.log(name)
   console.log(email)
   console.log(admin)
   console.log(password) 
   console.log(sexo)
   console.log(idade)
   console.log(apelido)  
   const user = {
      name:name,
      email:email,
      admin:admin,
      password:password,
      sexo:sexo,
      idade:idade,
      apelido:apelido,
    }; 
    const createUserService  = new CreateUserService();
    const ret = await  createUserService.execute(user);
    return response.json(ret);

  }
}
export { CreateUserController };