import { getCustomRepository } from "typeorm";
import { UserRepository } from "../../repositories/UserRepository";

class ListUserService {

    async execute(name: string) {
        const userRepository = getCustomRepository(UserRepository);

        let userListed: any;
        if(name) {
            userListed = await userRepository
                .createQueryBuilder("users")
                .where("users.name like :name", { name: `%${name}%`})
                .getMany();
        } else {
            userListed = await userRepository
                .createQueryBuilder("users")
                .getMany();
        }

        return userListed;
    }

}

export { ListUserService };