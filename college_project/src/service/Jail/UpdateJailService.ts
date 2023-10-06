import { getCustomRepository } from "typeorm";
import { JailRepositories } from "../../repositories/JailRepositories";

interface IJailUpdate{
    id:string,
    capacity:number,
    jail_number:string,
    security_level:string,
    responsible_guard:string,
    confort_level:string
}

class UpdateJailService{
    async execute({id,capacity,jail_number,security_level,responsible_guard,confort_level}:IJailUpdate){

        const jailRepositories = getCustomRepository(JailRepositories)

        const jailAlreadyexists = await jailRepositories.findOne({id})

        if(!jailAlreadyexists){
            throw new Error('this jail does not exists')
        
        }

        jailAlreadyexists.capacity=capacity
        jailAlreadyexists.jail_number=jail_number
        jailAlreadyexists.security_level=security_level
        jailAlreadyexists.responsible_guard=responsible_guard
        jailAlreadyexists.confort_level=confort_level
        jailAlreadyexists.updated_at=new Date()

        const jailUpdate = await jailRepositories.update(id,jailAlreadyexists)

        return jailUpdate
    }
}
export{UpdateJailService}