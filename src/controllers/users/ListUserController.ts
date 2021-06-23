import { Request, Response } from "express";
import { ListUserService } from "../../services/users/ListUserService";

class ListUserController {
    async handle(request: Request, response: Response) {
        //const { name } = request.params;
return response.json(request.params);
        // const listUserService = new ListUserService();
        
        // const listOfUsers = await listUserService.execute(name)

        // return response.send(listOfUsers);
    }
}

export { ListUserController }