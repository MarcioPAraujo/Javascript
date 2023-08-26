import {Request,Response}from "express";
import {EditProductService} from "../../service/product/EditProductService";

class EditProductController{
    async handle(request:Request,response:Response){
        //const id = request.params.id;
        const {name,category,price} = request.body;
        const editProductService = new EditProductService();

        const product = await editProductService.execute({name,category,price});
        return response.json(product);
    }
}

export {EditProductController};