import { getCustomRepository } from "typeorm";
import { JailRepositories } from "../../repositories/JailRepositories";

interface IJailUpdate{
    id:string,
    capacity:number,
    jailNumber:string,
    securityLevel:string,
    responsibleGuard:string,
    confortlevel:string
}

class UpdateJailService{
    async execute({id,capacity,jailNumber,securityLevel,responsibleGuard,confortlevel}:IJailUpdate){

        const jailRepositories = getCustomRepository(JailRepositories)

        const jailAlreadyexists = await jailRepositories.findOne({id})

        if(!jailAlreadyexists){
            throw new Error('this jail does not exists')
        
        }

        jailAlreadyexists.capacity=capacity
        jailAlreadyexists.jailNumber=jailNumber
        jailAlreadyexists.securityLevel=securityLevel
        jailAlreadyexists.responsibleGuard=responsibleGuard
        jailAlreadyexists.confortLevel=confortlevel
        jailAlreadyexists.updated_at=new Date()

        const jailUpdate = await jailRepositories.update(id,jailAlreadyexists)

        return jailUpdate
    }
}
export{UpdateJailService}