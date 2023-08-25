import { Request,Response } from "express";
// fazer import da service
import { CreateProductService } from "../../service/product/CreateProductService";

class CreateProductController{
    async handle (request:Request,response:Response){
        const {name,category,price,}= request.body;

        // instanciar classe de service
        const createProductService = new CreateProductService();
        
        const newProduct= await createProductService.execute({name,category,price})// chamar a service para fazer os dados
            
        
        return response.json(newProduct);
    }
}

export {CreateProductController};