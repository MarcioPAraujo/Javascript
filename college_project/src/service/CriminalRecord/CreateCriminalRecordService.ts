import { error } from "console";
import { CriminalRecordRepositories } from "../../repositories/CriminalRecordRepositories";
import { getCustomRepository } from "typeorm";

interface CriminalRecordRequest{
    prisoner:string
    sentence:string
    section:string
    reabilitation_program:string
    prision:string

}
class CreateCriminalRecordService{
    async execute({prisoner,sentence,section,reabilitation_program,prision}:CriminalRecordRequest){
        
        const criminalRecordRepositories = getCustomRepository(CriminalRecordRepositories)
        
        if(typeof(prisoner)===undefined){
            throw new Error('prisioner is not defined')
        }

        let criminalRecordData = {
            id:1,
            prisoner:prisoner,
            sentence:sentence,
            section:section,
            reabilitation_program:reabilitation_program,
            prision:prision
        
        }

        const record = criminalRecordRepositories.create({prisoner,sentence,section,reabilitation_program,prision})

        await criminalRecordRepositories.save(record)
        return record
    }
}

export{CreateCriminalRecordService}