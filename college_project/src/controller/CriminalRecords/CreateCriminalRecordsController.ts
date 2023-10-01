import { Request, Response } from "express";
import { CreateCriminalRecordService } from "../../service/CriminalRecord/CreateCriminalRecordService";

class CreateCriminalRecordsController{
    async handle(request:Request,response:Response){
        

        const {prisoner,sentence,section,reabilitationProgram,prision}= request.body

        const criminalRecord = {
            prisoner:prisoner,
            sentence:sentence,
            section:section,
            reabilitationProgram:reabilitationProgram,
            prision:prision,

        }
        const createCriminalRecordsService = new CreateCriminalRecordService()

        const retrieve = createCriminalRecordsService.execute(criminalRecord)

        return response.json(retrieve)
    }
}
export{CreateCriminalRecordsController}