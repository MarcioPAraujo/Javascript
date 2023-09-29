import { getCustomRepository } from "typeorm";
import { ReabilitationProgramRepositories } from "../../repositories/ReabilitationProgramRepositories";

class ListReabilitationProgram{
    async execute(){
        const reabilitationProgram = getCustomRepository(ReabilitationProgramRepositories)

        const programs = await reabilitationProgram.find()

        return programs
    }
}

export {ListReabilitationProgram}