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
    router.get("/:idUser", (req, res) => {
        listNotificationsByUserController(req, res)
    });
    router.put("/:_id", (req, res) => {
        editNotificationController(req, res)
    });
    router.delete("/:_id", (req, res) => {
        deleteNotificationController(req, res)
    });
    
    return router;
}

export default notificationRoutes