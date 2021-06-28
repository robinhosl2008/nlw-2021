import { getCustomRepository } from "typeorm";
import { TagRepository } from "../../repositories/TagRepository";



class CreateTagService {
    
    async execute(name: string) {
        const tagRepository = getCustomRepository(TagRepository);

        if (!name || typeof name != "string") {
            throw new Error("Nome não informado ou nome não é do tipo texto.");
        }

        const tag = await tagRepository.findOne({
            name
        })

        if (tag) {
            throw new Error("Já existe uma Tag com esse nome.");
        }

        const newTag = tagRepository.create({
            name
        });

        await tagRepository.save(newTag);

        return newTag
    }

}

export { CreateTagService };