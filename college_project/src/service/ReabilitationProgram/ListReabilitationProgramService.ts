import { getCustomRepository } from "typeorm";
import { ReabilitationProgramRepositories } from "../../repositories/ReabilitationProgramRepositories";

class ListReabilitationProgramService{
    async execute(){
        const reabilitationProgram = getCustomRepository(ReabilitationProgramRepositories)

        const programs = await reabilitationProgram.find()

        return programs
    }
}

export {ListReabilitationProgramService}