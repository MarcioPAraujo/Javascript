import { getCustomRepository } from "typeorm";
import { PrisonerRepositories } from "../../repositories/PrisonerRepositories";

class ListPrisonerService{
    async execute(){
        const prisonerRepository = getCustomRepository(PrisonerRepositories)

        const prisoners = await prisonerRepository.find()

        return prisoners
    }
}

export {ListPrisonerService}