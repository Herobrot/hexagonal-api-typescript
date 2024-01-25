import express, { Router } from "express";
import sendNotificationsByCategoryController from "../../notifications/infraestructure/controllers/sendNotificationsByCategoryController";
import listNotificationsByUserController from "../../notifications/infraestructure/controllers/listNotificationsByUserController";
import editNotificationController from "../../notifications/infraestructure/controllers/editNotificationUseController";
import deleteNotificationController from "../../notifications/infraestructure/controllers/deleteNotificationController";
import { controllerWrapper } from "../wrappers/controllerWrapper";

const router: Router = express.Router();
const notificationRoutes = (app: Router) => {
    router.post("/", controllerWrapper(sendNotificationsByCategoryController));
    router.get("/:id", controllerWrapper(listNotificationsByUserController));
    router.put("/:id", controllerWrapper(editNotificationController));
    router.delete("/:id", controllerWrapper(deleteNotificationController));
    return router;
}

export default notificationRoutes