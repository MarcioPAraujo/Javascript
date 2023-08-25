import {Request, Response} from "express";
 class ListCategoryController{
    async handle(request: Request, response:Response, ){

        const categories=[
            {
                name:"sucos",
                area:"liquidos"
            },
            {
                name:"enlatados",
                area:"peixes"
            }
        ];
        return response.json(categories);
    }
 }
 export{ListCategoryController};