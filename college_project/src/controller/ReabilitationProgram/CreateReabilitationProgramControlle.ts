import { Request, Response } from "express";
import { CreateReabilitationProgramService } from "../../service/ReabilitationProgram/CreateReabilitationProgramService";

class CreateReabilitationProgramControlle{
    async handle(request:Request,response:Response){
        
        const {task,times_per_week,duration,subject_of_study,responsable} = request.body

        const newProgram = {
            task:task,
            times_per_week:times_per_week,
            duration:duration,
            subject_of_study:subject_of_study,
            responsable:responsable
        }
        const createReabilitationProgramService = new CreateReabilitationProgramService()
        const retrieve = await createReabilitationProgramService.execeute(newProgram)

        return response.json(retrieve)
    }
}
export{CreateReabilitationProgramControlle}