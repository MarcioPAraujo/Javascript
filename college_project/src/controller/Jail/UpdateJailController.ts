import { Request, Response } from "express";
import { UpdateJailService } from "../../service/Jail/UpdateJailService";

class UpdateJailController{
    async handle(request:Request,response:Response){
        const{id,capacity,jail_number,security_level,responsible_guard,confort_level} = request.body

        const updateJailService=new UpdateJailService()

        const prisoner = await updateJailService.execute({id,capacity,jail_number,security_level,responsible_guard,confort_level})

        return response.json(prisoner)
    }

}
export{UpdateJailController}