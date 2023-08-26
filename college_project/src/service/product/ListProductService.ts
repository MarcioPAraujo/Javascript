import { classToPlain } from "class-transformer";

class ListProductService{
    async execute(){
        const productsList = 
        [
            {
                "name":"chocolate",
                "category":"candies",
                "price":"37.9"
            },
            {
                "name":"water",
                "category":"drinks",
                "price":"4.3"
            }
        ]
        return classToPlain(productsList);
    }
}

export {ListProductService};