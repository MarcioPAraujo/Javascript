import { getCustomRepository } from "typeorm";
import { EmployeeRepositories } from "../../repositories/EmployeeRepositories";

class ListEmployeeService{
    async execute(){
        const employeeRepositories = getCustomRepository(EmployeeRepositories)

        const employees = employeeRepositories.find()

        return employees
    }
}
export {ListEmployeeService}