import { Request,Response } from "express";

class CreateProductController{
    async handle (request:Request,response:Response){
        const {name,category,price,}= request.body;
        const newProduct={
            name:name,
            category:category,
            price:price
        }
        return response.json(CreateProductController);
    }
}

export {CreateProductController};