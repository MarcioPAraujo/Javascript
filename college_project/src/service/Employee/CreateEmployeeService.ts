import { getCustomRepository } from "typeorm";
import { EmployeeRepositories } from "../../repositories/EmployeeRepositories";

interface IEmployeeRequest{

    name:string,
    turno:string,
    task:string,
    accessLevel:string,
    equipament:string
}

class CreateEmployeeService{
    async execute({name,turno,task,accessLevel,equipament}:IEmployeeRequest){

        const employeeRepositories = getCustomRepository(EmployeeRepositories)

        if(!task){
            throw new Error('it must contain a task')
        }


        let vemploye = {id:1,name:name,turno:turno,task:task,accessLevel:accessLevel,equipament:equipament}

        const employee = employeeRepositories.create({name,turno,task,accessLevel,equipament})
        await employeeRepositories.save(employee)
        return employee

    }
}

export{CreateEmployeeService}