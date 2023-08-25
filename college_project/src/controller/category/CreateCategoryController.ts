import {Request, Response} from "express";
 class CreateCategoryController{
    async handle(request:Request, response:Response){
        const {name, area} = request.body;
        const category={
            name:name,
            area:area
        };
        return response.json(category);
    }
 }
 export {CreateCategoryController};