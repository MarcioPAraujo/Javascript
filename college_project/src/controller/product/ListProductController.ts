import {Request,Response}from "express";

class ListProductController{
    async handle(request:Request,response:Response){
        const products=[
            {
                name:"milho em conserva",
                category:"enlatados",
                price:"5.6"
            },
            {
                name:"pepsi",
                category:"refrigerantes",
                price:"6.9"
            }
        ]
        return response.json(products);
    }
}
export{ListProductController};