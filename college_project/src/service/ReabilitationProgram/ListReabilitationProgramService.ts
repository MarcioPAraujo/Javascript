import { getCustomRepository } from "typeorm";
import { ReabilitationProgramRepositories } from "../../repositories/ReabilitationProgramRepositories";

class ListReabilitationProgramService{
    async execute(){
        const reabilitationProgramRepositories = getCustomRepository(ReabilitationProgramRepositories)

        const programs = await reabilitationProgramRepositories.createQueryBuilder('reabilitationprogram').leftJoinAndSelect('reabilitationprogram.responsable','responsable').getMany()

        console.log(programs)
        
        return programs
    }
}

export {ListReabilitationProgramService}