import { Request, Response, response } from "express";
import { CreateEmployeeService } from "../../service/Employee/CreateEmployeeService";

class CreateEmployeeController{
    async handle(request:Request,reponse:Response){
        const{name,turno,task,accessLevel,equipament}=request.body

        const newEmployee = {
            name:name,
            turno:turno,
            task:task,
            accessLevel:accessLevel,
            equipament:equipament
        }
        const createEmployeeService = new CreateEmployeeService()
        const retrieve = await createEmployeeService.execute(newEmployee)

        return response.json(retrieve)

    }
}
export{CreateEmployeeController}