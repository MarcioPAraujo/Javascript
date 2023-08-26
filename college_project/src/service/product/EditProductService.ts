interface InterfaceEditProduct{
    name:string,
    category:string,
    price:number
}

class EditProductService{
    async execute({name,category,price}:InterfaceEditProduct){
        if(!name){
            throw new Error("it must contain a name");
        }
        if(price<=0){
            throw new Error("the price must be greater than zero");
        }

        const editedProduct = {name:"detergente",category:"limpeza",price:3.9}

        return editedProduct;
    }
}

export {EditProductService};