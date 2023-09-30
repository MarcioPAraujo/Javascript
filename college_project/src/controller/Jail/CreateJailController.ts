import { Request, Response } from "express";
import { CreatejailService } from "../../service/Jail/CreateJailService";

class CreateJailController{
    async handle(request:Request,response:Response){
        const{capacity,jailNumber,securityLevel,responsibleGuard,confortLevel}=request.body
        const prisoner= {
            capacity:capacity,
            jailNumber:jailNumber,
            securityLevel:securityLevel,
            responsibleGuard:responsibleGuard,
            confortLevel:confortLevel
        }
        const createJailService = new CreatejailService()
        const retrieve = await createJailService.execute(prisoner)

        return response.json(retrieve)

    }
}
export{CreateJailController}