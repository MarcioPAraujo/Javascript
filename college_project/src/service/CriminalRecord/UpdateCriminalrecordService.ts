import { getCustomRepository } from "typeorm";
import { CriminalRecordRepositories } from "../../repositories/CriminalRecordRepositories";
import { NONAME } from "dns";


interface ICriminalRecordRequest{
    id:string
    prisoner:string
    sentence:string
    section:string
    reabilitationProgram:string
    prision:string
}

class UpdateCriminalRecordService{
    async execute({id,prisoner,sentence,section,reabilitationProgram,prision}:ICriminalRecordRequest){
        const criminalRecord = getCustomRepository(CriminalRecordRepositories)

        const criminalRecordAlreadyExist = await criminalRecord.findOne({id})

        if(!criminalRecordAlreadyExist){
            throw new Error('user does not exists')
        }

        criminalRecordAlreadyExist.prision=prision
        criminalRecordAlreadyExist.prisoner=prisoner
        criminalRecordAlreadyExist.section=section
        criminalRecordAlreadyExist.sentence=sentence
        criminalRecordAlreadyExist.reabilitationProgram=reabilitationProgram
        criminalRecordAlreadyExist.updated_at=new Date()

        const record = await criminalRecord.update(id,criminalRecordAlreadyExist)
        return record
    }
}

export {UpdateCriminalRecordService}