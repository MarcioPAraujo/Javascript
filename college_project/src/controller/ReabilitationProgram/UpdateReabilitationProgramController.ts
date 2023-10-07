import { Request, Response } from "express";
import { UpdateReabiliatationProgramService } from "../../service/ReabilitationProgram/UpdateReabiliattionProgramService";

class UpdateReabilitationProgram{
    async handle(request:Request,response:Response){
        
        const {id,task,times_per_week,duration,subject_of_study,responsable} = request.body

        const updateReabiliataionProgramService = new UpdateReabiliatationProgramService()

        const updatedProgram = await updateReabiliataionProgramService.execute({id,task,times_per_week,duration,subject_of_study,responsable})

        return response.json(updatedProgram)
    }
}
export{UpdateReabilitationProgram}