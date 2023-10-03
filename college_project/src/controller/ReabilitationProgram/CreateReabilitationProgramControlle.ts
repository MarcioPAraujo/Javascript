import { Request, Response } from "express";
import { CreateReabilitationProgramService } from "../../service/ReabilitationProgram/CreateReabilitationProgramService";

class CreateReabilitationProgramControlle{
    async handle(request:Request,response:Response){
        
        const {task,timesPerWeek,duration,subjectOfStudy,responsable} = request.body

        const newProgram = {
            task:task,
            timesPerWeek:timesPerWeek,
            duration:duration,
            subjectOfStudy:subjectOfStudy,
            responsable:responsable
        }
        const createReabilitationProgramService = new CreateReabilitationProgramService()
        const retrieve = await createReabilitationProgramService.execeute(newProgram)

        return response.json(retrieve)
    }
}
export{CreateReabilitationProgramControlle}