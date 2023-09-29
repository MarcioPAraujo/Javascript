import { getCustomRepository } from "typeorm";
import { PrisonerRepositories } from "../../repositories/PrisonerRepositories";

interface IPrisoner{
    name:string
    height:number
    weight:number
    age:number
    nationality:string
}

class CreatePrisonerService{
    async execute({name,height,weight,age,nationality}:IPrisoner){

        const prisonerRepository = getCustomRepository(PrisonerRepositories)

        const newPrisoner = prisonerRepository.create({name,height,weight,age,nationality})
        await prisonerRepository.save(newPrisoner)
        return newPrisoner
    }
}
export{CreatePrisonerService}