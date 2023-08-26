interface IEditCategory{
    name:string,
    area:string
}

class EditCategoryService{
    async execute({name,area}:IEditCategory){
        if(!name){
            throw new Error("it must contain a name!");
        }
        if(!area){
            throw new Error("there is not a area!");
        }

        const updatedCategory = {name:"salt",area:"food"};
        return updatedCategory;
    }
}

export {EditCategoryService};