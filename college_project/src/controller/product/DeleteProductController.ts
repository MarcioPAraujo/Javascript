import {Request,Response, json} from "express";

class DeleteProductController{
    async handle (request:Request,response:Response){
        const id = request.params.id;
        const product = {
            name:"arroz",
            category:"comodities",
            price:"22.4"
        }
        return response.json(product);
    }
}
export {DeleteProductController};