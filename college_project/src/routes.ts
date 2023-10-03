import { Router } from "express";
/*----------USER---------*/
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
/*----------CRIMINAL_RECORD---------*/
import { CreateCriminalRecordsController } from "./controller/CriminalRecords/CreateCriminalRecordsController";
import { DeleteCriminalRecordsController } from "./controller/CriminalRecords/DeleteCriminalRecordsController";
import { ListCriminalRecordsController } from "./controller/CriminalRecords/ListCriminalRecordsController";
import { UpdateCriminalRecordsController } from "./controller/CriminalRecords/UpdateCriminalRecordsController";

const createCriminalRecord = new CreateCriminalRecordsController()
const deleteCriminalRecord = new DeleteCriminalRecordsController()
const listCrimnialRecords = new ListCriminalRecordsController()
const updateCriminalRecord = new UpdateCriminalRecordsController()

/*----------EMPLOYEE---------*/
import { CreateEmployeeController } from "./controller/Employee/CreateEmployeeController";
import { DeleteEmployeeController } from "./controller/Employee/DeleteEmployeeController";
import { ListEmployeeController } from "./controller/Employee/ListEmployeeController";
import { UpdateEmployeeController } from "./controller/Employee/UpdateEmployeeController";

const createEmployee = new CreateEmployeeController()
const deleteEmployee = new DeleteEmployeeController()
const listEmployee = new ListEmployeeController()
const updateEmployee = new UpdateEmployeeController()

/*----------JAIL---------*/
import { CreateJailController } from "./controller/Jail/CreateJailController";
import { DeleteJailController } from "./controller/Jail/DeleteJailController";
import { ListJailController } from "./controller/Jail/ListJailController";
import { UpdateJailController } from "./controller/Jail/UpdateJailController";

const createJail = new CreateJailController()
const deleteJail = new DeleteJailController()
const listJail = new ListJailController()
const updateJail = new UpdateJailController()

/*----------PRISONER---------*/
import { CreatePrisonerController } from "./controller/Prisoner/CreatePrisonerController";
import { DeleteprisonerController } from "./controller/Prisoner/DeletePrisonerController";
import { ListPrisonerController } from "./controller/Prisoner/ListPrisonerController";
import { UpdatePrisonerController } from "./controller/Prisoner/UpdatePrisonerController";

const createPrisoner = new CreatePrisonerController()
const deletePrisoner = new DeleteprisonerController()
const listPrisoner = new ListPrisonerController()
const updatePrisoner = new UpdatePrisonerController()

/*----------REABILITATIONPROGRAM---------*/
import { CreateReabilitationProgramControlle } from "./controller/ReabilitationProgram/CreateReabilitationProgramControlle";
import { DeleteReabilitationProgramController} from "./controller/ReabilitationProgram/DeleteReabilitationProgramController";
import { ListReabilitationProgramController } from "./controller/ReabilitationProgram/ListReabilitationProgramController";
import { UpdateReabiliatationProgramService } from "./service/ReabilitationProgram/UpdateReabiliattionProgramService";
import { UpdateReabilitationProgram } from "./controller/ReabilitationProgram/UpdateReabilitationProgramController";


const createReabilitation = new CreateReabilitationProgramControlle()
const deleteReabilitation = new DeleteReabilitationProgramController()
const listReabilitation = new ListReabilitationProgramController()
const updateReabilitation = new UpdateReabilitationProgram()

const router = Router();
router.post("/login", autenticationUserController.handle);
router.post("/users", createUserController.handle);

router.use(ensureAuthenticated)
router.get("/users", listUsersController.handle);
router.put("/users", updateUserController.handle);
router.delete("/users/:id", deleteUserController.handle);

export {router}