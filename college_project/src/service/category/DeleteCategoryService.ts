interface ICategoryDelete{
    id:string
}

class DeleteCategoryService{
    async execute({id}:ICategoryDelete){

        if(!id){
            throw new Error("this id does not exist");
        }
        
        var messageDelete = {message:"id deleted!"};

        return messageDelete;
    }
}

export {DeleteCategoryService};