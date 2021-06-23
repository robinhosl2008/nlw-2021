import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/UserRepository";

class ListUserService {

    async execute(name: string) {
        const userRepository = getCustomRepository(UserRepository);

        let userListed: any;
        if(name) {
            userListed = await userRepository.findOne({name});
        } else {
            userListed = await userRepository.find();
        }

        return userListed;
    }

}

export { ListUserService };