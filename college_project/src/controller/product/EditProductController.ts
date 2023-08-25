import {Request,Response}from "express";

class EditProductController{
    async handle(request:Request,response:Response){
        const id = request.params.id;
        const product={
            name:"presunto",
            caegory:"frios",
            price:"40.6"
        }
        return response.json(product);
    }
}

export {EditProductController};