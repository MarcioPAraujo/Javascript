interface deleteProduct{
    id:string
}

class DeleteProductService{
    async execute({id}:deleteProduct){

        var messageDelete = {message:"product was deleted!"};

        return messageDelete;
    }
}

export {DeleteProductService};