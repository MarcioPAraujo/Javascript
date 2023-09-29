import { getCustomRepository } from "typeorm";
import { ReabilitationProgramRepositories } from "../../repositories/ReabilitationProgramRepositories"; 

interface IReabilitationProgramCreate{
    task:string,
    timesPerWeek:number,
    duration:string,
    subjectOfStudy:string,
    responsable:string
}

class CreateReabilitationProgram{
    async execeute({task,timesPerWeek,duration,subjectOfStudy,responsable}:IReabilitationProgramCreate){
        const reabilitationrepository = getCustomRepository(ReabilitationProgramRepositories)

        const program = reabilitationrepository.create({task,timesPerWeek,duration,subjectOfStudy,responsable})

        await reabilitationrepository.save(program)

        return program
    }
}

export{CreateReabilitationProgram}