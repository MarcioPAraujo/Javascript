import {Request,Response} from "express";

class EditCategoryController{
    async handle(request: Request,response:Response){
        const id = request.params.id;
        const category = {
            name:"comodities",
            area:"óleos"
        }
        return response.json(category);
    
    }
}
export {EditCategoryController};