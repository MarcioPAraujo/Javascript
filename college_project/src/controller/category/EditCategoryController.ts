import {Request,Response} from "express";
import { EditCategoryService } from "../../service/category/EditcategoryService";


class EditCategoryController{
    async handle(request: Request,response:Response){
        //const id = request.params.id;
        const {name,area} = request.body;
        const editcategoryService = new EditCategoryService();
        const category = await editcategoryService.execute({name,area});
        return response.json(category);
    
    }
}
export {EditCategoryController};