import { Router } from "express";
import { CreateUserController } from "./controller/user/CreateUserController";
import { ListUsersController } from "./controller/user/LIstUserController";
import { UpdateUserController} from "./controller/user/UpdateUserController";
import { DeleteUserController} from "./controller/user/DeleteUserController";
import {AuthenticateUserController} from "./controller/autentication/AutenticationController";
import { ensureAuthenticated} from "./middleware/ensureAutenticated";

const createUserController  = new CreateUserController();
const listUsersController= new ListUsersController();
const updateUserController  = new UpdateUserController();
const autenticationUserController  = new AuthenticateUserController();
const deleteUserController  = new DeleteUserController();

const router = Router();
router.post("/login", autenticationUserController.handle);
router.post("/users", createUserController.handle);

router.use(ensureAuthenticated)
router.get("/users", listUsersController.handle);
router.put("/users", updateUserController.handle);
router.delete("/users/:id", deleteUserController.handle);

export {router}