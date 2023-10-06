import { getCustomRepository } from "typeorm";
import { JailRepositories } from "../../repositories/JailRepositories";

interface IJailService{
    capacity:number,
    jail_number:string,
    security_level:string,
    responsible_guard:string,
    confort_level:string
}

class CreatejailService{
    async execute({capacity,jail_number: jail_number,security_level: security_level,responsible_guard,confort_level}:IJailService){

        const jailrepository = getCustomRepository(JailRepositories)

        let vjail = {
            id:1,
            capacity:capacity,
            jail_number:jail_number,
            security_level:security_level,
            responsible_guard:responsible_guard,
            confort_level:confort_level
        }

        const jail = jailrepository.create({capacity,jail_number,security_level,responsible_guard,confort_level})

        await jailrepository.save(jail)

        return jail
    }
}

export{CreatejailService}