import { Request, Response } from "express";
import { UpdateCriminalRecordService } from "../../service/CriminalRecord/UpdateCriminalrecordService";

class UpdateCriminalRecordsController{
    async handle(request:Request,response:Response){
        const{id,prisoner,sentence,section,reabilitationProgram,prision} = request.body
        const updateCriminalRecordsService = new UpdateCriminalRecordService()
        const updatedRecords = await updateCriminalRecordsService.execute({id,prisoner,sentence,section,reabilitationProgram,prision})
        return response.json(updatedRecords)

    }
}
export{UpdateCriminalRecordsController}