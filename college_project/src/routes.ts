import { Router } from "express";
// import {ensureAuthenticated} from "./middleware/ensureAuthenticated";
// import {ensureAdmin} from "./middlewares/ensureAdmin";

import { CreateUserController } from "./controller/user/CreateUserController";
import { ListUserController } from "./controller/user/ListUserController";
import { DeleteUserController } from "./controller/user/DeleteUserController";
import { UpdateUserController } from "./controller/user/UpdateUserController";

import { CreateProductController } from "./controller/product/CreateProductController";
import { ListProductController } from "./controller/product/ListProductController";
import { DeleteProductController } from "./controller/product/DeleteProductController";
import { EditProductController } from "./controller/product/EditProductController";

import { CreateCategoryController } from "./controller/category/CreateCategoryController";
import { ListCategoryController } from "./controller/category/ListCategoryController";
import { DeleteCategoryController } from "./controller/category/DeleteCategoryController";
import { EditCategoryController } from "./controller/category/EditCategoryController";


const createUserController = new CreateUserController();
const listUserController = new ListUserController();
const deleteUserController = new DeleteUserController();
const editUserController = new UpdateUserController();

const createProductController = new CreateProductController();
const listProductController = new ListProductController();
const deleteProductController = new DeleteProductController();
const editProductController = new EditProductController();

const createCategorycController =new CreateCategoryController();
const listCategoryController = new ListCategoryController();
const delteCategoryController =new DeleteCategoryController();
const editCategoryController =new EditCategoryController();

const router = Router();
router.post("/users",createUserController.handle);
router.get("/users",listUserController.handle);
router.delete("/users/:id",deleteUserController.handle);
router.put("/users/:id",editUserController.handle);

router.post("/product",createProductController.handle);
router.get("/product",listProductController.handle);
router.delete("/product/:id",deleteProductController.handle);
router.put("/product/",editProductController.handle);

router.post("/category",createCategorycController.handle);
router.get("/category",listCategoryController.handle);
router.delete("/category/:id",delteCategoryController.handle);
router.put("/category/",editCategoryController.handle);

export {router}
 