import { getCustomRepository } from "typeorm";
import { EmployeeRepositories } from "../../repositories/EmployeeRepositories";

interface IEmployeeUpdate{
    id:string,
    name:string,
    turno:string,
    task:string,
    accessLevel:string,
    equipament:string
}

class UpdateEmloyeeService{
    async execute({id,name,turno,task,accessLevel,equipament}:IEmployeeUpdate){

        const employeeRepositories = getCustomRepository(EmployeeRepositories)
        const employeeAlreadyExists = await employeeRepositories.findOne({id})

        if(!employeeAlreadyExists){
            throw new Error('this employee doesnot exists')
        }

        employeeAlreadyExists.name=name,
        employeeAlreadyExists.turno=turno,
        employeeAlreadyExists.task=task,
        employeeAlreadyExists.accessLevel=accessLevel,
        employeeAlreadyExists.equipament=equipament,
        employeeAlreadyExists.updated_at=new Date

        const employee = await employeeRepositories.update(id,employeeAlreadyExists)
        return employee

    }
}

export{UpdateEmloyeeService}