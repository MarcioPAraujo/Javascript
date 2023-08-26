import { classToPlain } from "class-transformer";

class ListCategoryService{
    async execute(){
        const listCategories =
        [
            {
                "name":"phones",
                "area":"eletronic"
            },
            {
                "name":"tires",
                "area":"vehicless"
            }
        ]
        return listCategories;
    }
}

export{ListCategoryService};