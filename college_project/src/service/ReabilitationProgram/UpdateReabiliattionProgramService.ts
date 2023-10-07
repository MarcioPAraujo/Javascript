import { getCustomRepository } from "typeorm";
import { ReabilitationProgramRepositories } from "../../repositories/ReabilitationProgramRepositories";

interface IReabilitationProgramupdate{
    id:string,
    task:string,
    times_per_week:number,
    duration:string,
    subject_of_study:string,
    responsable:string
}

class UpdateReabiliatationProgramService{
    async execute({id,task,times_per_week,duration,subject_of_study,responsable}:IReabilitationProgramupdate){

        const reabilitationRepository = getCustomRepository(ReabilitationProgramRepositories)

        const programAlreadyExists = await reabilitationRepository.findOne(id)

        if(!programAlreadyExists){
            throw new Error('this program does not exists')
        }

        programAlreadyExists.task=task
        programAlreadyExists.times_per_week=times_per_week
        programAlreadyExists.duration=duration
        programAlreadyExists.subject_of_study=subject_of_study
        programAlreadyExists.responsable=responsable
        programAlreadyExists.updated_at=new Date()

        const reabilitationProgramUpdated = await reabilitationRepository.update(id,programAlreadyExists)

        return reabilitationProgramUpdated
    }
}

export{UpdateReabiliatationProgramService}