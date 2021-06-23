import { Request, Response } from "express";
import { CreateUserService } from "../../services/users/CreateUserService";

class CreateUserController {
    async handle(request: Request, response: Response) {
        // Pega do body da requisição os valores.
        const { name, email, admin } = request.body;

        // Cria uma instância do Service.
        const createUserService = new CreateUserService();

        // Executa a função no service para criar um novo usuário.
        const user = await createUserService.execute({ name, email, admin });

        // Retorna o usuário criado.
        return response.json(user);
    }
}

export { CreateUserController };