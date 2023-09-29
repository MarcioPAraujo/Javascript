import { getCustomRepository } from "typeorm";
import { JailRepositories } from "../../repositories/JailRepositories";

interface IJailService{
    capacity:number,
    jailNumber:string,
    securityLevel:string,
    responsibleGuard:string,
    confortLevel:string
}

class CreatejailService{
    async execute({capacity,jailNumber,securityLevel,responsibleGuard,confortLevel}:IJailService){

        const jailrepository = getCustomRepository(JailRepositories)

        let vjail = {
            id:1,
            capacity:capacity,
            jailNumber:jailNumber,
            securityLevel:securityLevel,
            responsibleGuard:responsibleGuard,
            confortLevel:confortLevel
        }

        const jail = jailrepository.create({capacity,jailNumber,securityLevel,responsibleGuard,confortLevel})

        await jailrepository.save(jail)

        return jail
    }
}

export{CreatejailService}