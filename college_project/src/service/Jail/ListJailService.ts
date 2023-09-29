import { getCustomRepository } from "typeorm";
import { JailRepositories } from "../../repositories/JailRepositories";

class ListJailService{
    async execute(){
        const jailRepositories = getCustomRepository(JailRepositories)

        const jails = await jailRepositories.find()

        return jails
    }
}

export{ListJailService}