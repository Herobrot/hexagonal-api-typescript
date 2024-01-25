import express, { Router } from "express";
import createUserController from "../../users/infraestructure/controllers/createUserController";
import getListOfUsersByRoleController from "../../users/infraestructure/controllers/getListOfUsersByRoleController";
import editUserController from "../../users/infraestructure/controllers/editUserController";
import deleteUserController from "../../users/infraestructure/controllers/deleteUserController";
import { controllerWrapper } from "../wrappers/controllerWrapper";

const router: Router = express.Router();
const userRoutes = (app: Router) => {
    router.post("/", controllerWrapper(createUserController));
    router.get("/:role", controllerWrapper(getListOfUsersByRoleController));
    router.put("/:id", controllerWrapper(editUserController));
    router.delete("/:id", controllerWrapper(deleteUserController));
    return router;
}

export default userRoutes