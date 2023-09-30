import { getCustomRepository } from "typeorm";
import { JailRepositories } from "../../repositories/JailRepositories";

interface IJailDelete{
    id:string
}

class DeleteJailService{
    async execute({id}:IJailDelete){
        const jailRepositories = getCustomRepository(JailRepositories)

        const jailAlreadyexists = await jailRepositories.findOne(id)

        if(!jailAlreadyexists){
            throw new Error('this user does not exists')
        }

        const retrieve = await jailRepositories.delete(id)

        let messagmsgeDelete = {message:`the user ${id} was deleted`}

        return messagmsgeDelete

    }
}

export{DeleteJailService}