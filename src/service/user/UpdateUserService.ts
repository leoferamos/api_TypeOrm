import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../../repositories/user/UserRepositories";
import { hash } from "bcryptjs";
interface IUserRequest {
    id: string;    name: string;     email: string;    admin: boolean;    password: string;  sexo: string;  idade:string;  apelido:string;
  }  
  class UpdateUserService {
    async execute({ id, name,  admin , password, sexo, idade, apelido }: IUserRequest) {
     
      const usersRepository = getCustomRepository(UsersRepositories);
      const userAlreadyExists = await usersRepository.findOne({
        id,
      });
      if (!userAlreadyExists) {
          throw new Error("User not exists")      }
      const passwordHash = await hash(password, 8)
      userAlreadyExists.name=name
      userAlreadyExists.admin=admin
      userAlreadyExists.sexo=sexo
      userAlreadyExists.idade=idade
      userAlreadyExists.apelido=apelido
      userAlreadyExists.updated_at=new Date()
      userAlreadyExists.password=passwordHash
      
      const user= await usersRepository.update(id,userAlreadyExists)
      
      return user;  
      
    }
  }
  
  export { UpdateUserService };