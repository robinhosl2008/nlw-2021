import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/UserRepository";

interface IUserRequest {
    name: string;
    email: string;
    admin?: boolean;
}

class CreateUserService {

    async execute({ name, email, admin }: IUserRequest) {
        // Verificando se o e-mail foi informado.
        if (!email) {
            throw new Error("E-mail incorreto.");
        }

        // Criando uma instância do repositório.
        const userRepository = getCustomRepository(UserRepository);
        
        // Buscando um usuário no banco que tenha o mesmo e-mail.
        const userAlreadyExists = await userRepository.findOne({
            email
        });

        // Verificando se já existe um registro com o mesmo e-mail.
        if (userAlreadyExists) {
            throw new Error("Usuário já existe.");
            
        }

        // Cria um objeto usuário.
        const user = userRepository.create({
            name,
            email,
            admin
        });

        // Salva esse objeto no banco.
        await userRepository.save(user);

        // Retorna o usuário.
        return user;
    }

}

export { CreateUserService };