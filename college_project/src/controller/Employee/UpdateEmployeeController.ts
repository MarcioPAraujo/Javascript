import { Request, Response } from "express";
import { UpdateEmloyeeService } from "../../service/Employee/UpdateEmployeeService";

class UpdateEmployeeController{
    async handle(request:Request,response:Response)
    {   
        const {id,name,turno,task,accessLevel,equipament} = request.body
        const updateEmployeeService = new UpdateEmloyeeService()

        const updatedEmployee = await updateEmployeeService.execute({id,name,turno,task,accessLevel,equipament})
        return response.json(updatedEmployee)   
    }
}
export{UpdateEmployeeController}