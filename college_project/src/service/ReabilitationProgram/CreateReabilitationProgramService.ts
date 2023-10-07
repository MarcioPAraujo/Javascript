import { getCustomRepository } from "typeorm";
import { ReabilitationProgramRepositories } from "../../repositories/ReabilitationProgramRepositories"; 

interface IReabilitationProgramCreate{
    task:string,
    times_per_week:number,
    duration:string,
    subject_of_study:string,
    responsable:string
}

class CreateReabilitationProgramService{
    async execeute({task,times_per_week,duration,subject_of_study,responsable}:IReabilitationProgramCreate){
        const reabilitationrepository = getCustomRepository(ReabilitationProgramRepositories)

        const program = reabilitationrepository.create({task,times_per_week,duration,subject_of_study,responsable})

        await reabilitationrepository.save(program)

        return program
    }
}

export{CreateReabilitationProgramService}