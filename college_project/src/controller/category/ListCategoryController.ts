import {Request, Response} from "express";
import { ListCategoryService } from "../../service/category/List CategoryService";

 class ListCategoryController{
    async handle(request: Request, response:Response){

        const listCategoriesService = new ListCategoryService();

        const categories = await listCategoriesService.execute();
        
        return response.json(categories);
    }
 }
 export{ListCategoryController};