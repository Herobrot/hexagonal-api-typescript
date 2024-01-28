import express, { Router } from "express";
import sendNotificationsByCategoryController from "./controllers/sendNotificationsByCategoryController";
import listNotificationsByUserController from "./controllers/listNotificationsByUserController";
import editNotificationController from "./controllers/editNotificationUseController";
import deleteNotificationController from "./controllers/deleteNotificationController";

const router: Router = express.Router();
const notificationRoutes = (app: Router) => {
    router.post("/", (req, res) => {
        sendNotificationsByCategoryController(req, res);
    });
    router.get("/:id", (req, res) => {
        listNotificationsByUserController(req, res)
    });
    router.put("/:id", (req, res) => {
        editNotificationController(req, res)
    });
    router.delete("/:id", (req, res) => {
        deleteNotificationController(req, res)
    });
    
    return router;
}

export default notificationRoutes