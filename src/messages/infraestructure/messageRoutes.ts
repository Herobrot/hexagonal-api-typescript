import express, { Router } from "express";
import submitMessageController from "./controllers/submitMessageController";
import listMessageController from "./controllers/listMessageController";
import editMessageController from "./controllers/editMessageController";
import deleteMessageController from "./controllers/deleteMessageController";
import { controllerWrapper } from "./controllers/controllerWrapper";

const router: Router = express.Router();
const messageRoutes = (app: Router) => {
    router.post("/", controllerWrapper(submitMessageController));
    router.get("/:id", controllerWrapper(listMessageController));
    router.put("/:id", controllerWrapper(editMessageController));
    router.delete("/:id", controllerWrapper(deleteMessageController));
    return router;
}

export default messageRoutes