import { getCustomRepository } from "typeorm";
import { ReabilitationProgramRepositories } from "../../repositories/ReabilitationProgramRepositories";

interface IReabilitationProgramupdate{
    id:string,
    task:string,
    timesPerWeek:number,
    duration:string,
    subjectOfStudy:string,
    responsable:string
}

class UpdateReabiliatationProgram{
    async execute({id,task,timesPerWeek,duration,subjectOfStudy,responsable}:IReabilitationProgramupdate){

        const reabilitationRepository = getCustomRepository(ReabilitationProgramRepositories)

        const programAlreadyExists = await reabilitationRepository.findOne(id)

        if(!programAlreadyExists){
            throw new Error('this program does not exists')
        }

        programAlreadyExists.task=task
        programAlreadyExists.timesPerWeek=timesPerWeek
        programAlreadyExists.duration=duration
        programAlreadyExists.subjectOfStudy=subjectOfStudy
        programAlreadyExists.responsable=responsable
        programAlreadyExists.updated_at=new Date()

        const reabilitationProgramUpdated = await reabilitationRepository.update(id,programAlreadyExists)

        return reabilitationProgramUpdated
    }
}

export{UpdateReabiliatationProgram}