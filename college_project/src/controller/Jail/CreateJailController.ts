import { Request, Response } from "express";
import { CreatejailService } from "../../service/Jail/CreateJailService";

class CreateJailController{
    async handle(request:Request,response:Response){
        const{capacity,jail_number,security_level,responsible_guard,confort_level}=request.body
        const prisoner= {
            capacity:capacity,
            jail_number:jail_number,
            security_level:security_level,
            responsible_guard:responsible_guard,
            confort_level:confort_level
        }
        const createJailService = new CreatejailService()
        const retrieve = await createJailService.execute(prisoner)

        return response.json(retrieve)

    }
}
export{CreateJailController}