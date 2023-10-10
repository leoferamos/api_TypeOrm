import { UsersRepositories } from "../../repositories/user/UserRepositories";
import { getCustomRepository } from "typeorm";
import { hash } from "bcryptjs";
interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
    password: string;
    sexo: string;
    idade: string;
    apelido: string;
  }  
  class CreateUserService {
    async execute({ name, email, admin = false, password, sexo, idade, apelido }: IUserRequest) {       
      console.log("teste")    
      const usersRepository = getCustomRepository(UsersRepositories);
      if (!email) {
        throw new Error("Email incorrect");     }  
      var vuser = {
       id:1, name:name, email:email, admin:admin, password:password, sexo:sexo, idade:idade, apelido:apelido
      }
      const passwordHash = await hash(password, 8);
      console.log(passwordHash);  
      console.log("teste") 
      const user = usersRepository.create(
        {
        name,
        email,
        admin,
        password: passwordHash,
        sexo,
        idade,
        apelido,
      });
      await usersRepository.save(user);  
      return user;
    }
  }  
  export { CreateUserService };
