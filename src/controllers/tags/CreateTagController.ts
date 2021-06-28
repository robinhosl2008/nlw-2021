import { Request, Response } from "express";
import { CreateTagService } from "../../services/tags/CreateTagService";




class CreateTagController {
    async handle(request: Request, response: Response) {
        // Pega a informação do corpo da requisição.
        const { name } = request.body;

        // Cria uma instância do serviço.
        const service = new CreateTagService();

        // Envia o nome para o serviço criar mais um registro.
        const createdTag = await service.execute(name);

        // Retorna o registro criado para confirmação.
        return response.send(createdTag);
    }
}

export { CreateTagController };