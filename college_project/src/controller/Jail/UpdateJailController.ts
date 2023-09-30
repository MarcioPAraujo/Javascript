import { Request, Response } from "express";
import { UpdateJailService } from "../../service/Jail/UpdateJailService";

class UpdateJailController{
    async handle(request:Request,response:Response){
        const{id,capacity,jailNumber,securityLevel,responsibleGuard,confortLevel} = request.body

        const updateJialService=new UpdateJailService()

        const prisoner = await updateJialService.execute({id,capacity,jailNumber,securityLevel,responsibleGuard,confortLevel})

        return response.json(prisoner)
    }

}
export{UpdateJailController}