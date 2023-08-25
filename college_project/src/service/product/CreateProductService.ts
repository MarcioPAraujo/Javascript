interface productRequest{
    name:string,
    category:string,
    price:number
}

class CreateProductService{
    async execute({name,category,price}:productRequest){
        if(price<=0){
            throw new Error("the price must be grater than zero");
        
        }

        var newProduct = {name:"macarrão",category:"massas",price:6.9}

        return newProduct;
    }
}

export {CreateProductService};