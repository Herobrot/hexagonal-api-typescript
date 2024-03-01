import MongooseRepository from "./mongooseRepository";
import { NotificacionNewUser } from "./servicesRabbitMQ/NotificationNewUser";
import { NotificacionNewUserUseCase } from "../application/services/NotificationNewUser";
import { CreateUserController } from "./controllers/createUserController";
import { EditUserController } from "./controllers/editUserController";
import { DeleteUserController } from "./controllers/deleteUserController";
import { LoginUserController } from "./controllers/loginUserController";
import { GetListOfUsersByRoleController } from "./controllers/getListOfUsersByRoleController";
import { CreateUserUseCase } from "../application/createUserUseCase";
import { EditUserUseCase } from "../application/editUserUseCase";
import { DeleteUserUseCase } from "../application/deleteUserUseCase";
import { LoginUserUseCase } from "../application/loginUserUseCase";
import { EncryptService } from "./helpers/EncryptService";
import { GetListOfUsersByRoleUseCase } from "../application/getListOfUsersByRoleUseCase";


export const mongooseRepository = new MongooseRepository();
export const notificationNewUser = new NotificacionNewUser();

export const notificationNewUserUseCase = new NotificacionNewUserUseCase(
    notificationNewUser
)

export const createUserUseCase = new CreateUserUseCase(
    mongooseRepository,
    new EncryptService,
    notificationNewUserUseCase
)

export const editUserUseCase = new EditUserUseCase(
    mongooseRepository,
    new EncryptService
)

export const deleteUserUseCase = new DeleteUserUseCase(
    mongooseRepository
)

export const loginUserUseCase = new LoginUserUseCase(
    mongooseRepository,
    new EncryptService
)

export const getListOfUsersByRole = new GetListOfUsersByRoleUseCase(
    mongooseRepository
)

export const createUserController = new CreateUserController(
    createUserUseCase
)

export const editUserController = new EditUserController(
    editUserUseCase
)

export const deleteUserController = new DeleteUserController(
    deleteUserUseCase
)

export const loginUserController = new LoginUserController(
    loginUserUseCase
)

export const getListOfUsersByRoleController = new GetListOfUsersByRoleController(
    getListOfUsersByRole
)