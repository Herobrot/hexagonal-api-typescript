import express, { Router } from "express";
import sendNotificationsByCategoryController from "./controllers/sendNotificationsByCategoryController";
import listNotificationsByUserController from "./controllers/listNotificationsByUserController";
import editNotificationController from "./controllers/editNotificationUseController";
import deleteNotificationController from "./controllers/deleteNotificationController";
import { controllerWrapper } from "./controllers/controllerWrapper";

const router: Router = express.Router();
const notificationRoutes = (app: Router) => {
    router.post("/", controllerWrapper(sendNotificationsByCategoryController));
    router.get("/:id", controllerWrapper(listNotificationsByUserController));
    router.put("/:id", controllerWrapper(editNotificationController));
    router.delete("/:id", controllerWrapper(deleteNotificationController));
    
    return router;
}

export default notificationRoutes