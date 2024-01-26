import express, { Router } from "express";
import submitMessageController from "../../messages/infraestructure/controllers/submitMessageController";
import listMessageController from "../../messages/infraestructure/controllers/listMessageController";
import editMessageController from "../../messages/infraestructure/controllers/editMessageController";
import deleteMessageController from "../../messages/infraestructure/controllers/deleteMessageController";
import { controllerWrapper } from "../wrappers/controllerWrapper";

const router: Router = express.Router();
const messageRoutes = (app: Router) => {
    router.post("/", controllerWrapper(submitMessageController));
    router.get("/:id", controllerWrapper(listMessageController));
    router.put("/:id", controllerWrapper(editMessageController));
    router.delete("/:id", controllerWrapper(deleteMessageController));
    return router;
}

export default messageRoutes