import { getCustomRepository } from "typeorm";
import { CriminalRecordRepositories } from "../../repositories/CriminalRecordRepositories";

class ListCriminalRecordService{
    async execute(){
        const criminalRecord = getCustomRepository(CriminalRecordRepositories)

        const records = await criminalRecord.find()

        return records
    }
}

export{ListCriminalRecordService}