import {Request, Response} from "express";

    class DeleteCategoryController {
        async handle (request:Request, response: Response){
            const id = request.params.id;
            const category = {
                name:"sucos",
                area:"liquidos"
            }
            return response.json(category);
        }
    }
export {DeleteCategoryController};