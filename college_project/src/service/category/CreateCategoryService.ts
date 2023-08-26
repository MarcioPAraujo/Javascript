interface interfaceCategory{
    name:string,
    area:string
}

class CreateCategoryService{
    async execute({name,area}:interfaceCategory){
        if(!name){
            throw new Error("it must contain a neme");
        }
        if(!area){
            throw new Error("category must contain an area");
        }

        const category = {name:"massa",area:"food"};

        return category;
    }
}

export {CreateCategoryService};