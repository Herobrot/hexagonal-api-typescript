import express, { Router } from "express";
import createUserController from "./controllers/createUserController";
import getListOfUsersByRoleController from "./controllers/getListOfUsersByRoleController";
import editUserController from "./controllers/editUserController";
import deleteUserController from "./controllers/deleteUserController";
import { controllerWrapper } from "./controllers/controllerWrapper";

const router: Router = express.Router();
const userRoutes = (app: Router) => {
    router.post("/", controllerWrapper(createUserController));
    router.get("/:role", controllerWrapper(getListOfUsersByRoleController));
    router.put("/:_id", controllerWrapper(editUserController));
    router.delete("/:_id", controllerWrapper(deleteUserController));
    return router;
}

export default userRoutes