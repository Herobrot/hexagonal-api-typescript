import express, { Router } from "express";
import submitMessageController from "./controllers/submitMessageController";
import listMessageController from "./controllers/listMessageController";
import editMessageController from "./controllers/editMessageController";
import deleteMessageController from "./controllers/deleteMessageController";

const router: Router = express.Router();
const messageRoutes = (app: Router) => {
    router.post("/", (req, res) => {
        submitMessageController(req, res)
    });
    router.get("/:id", (req, res) => {
        listMessageController(req, res)
    });
    router.put("/:id", (req, res) => {
        editMessageController(req, res)
    });
    router.delete("/:id", (req, res) => {
        deleteMessageController(req, res)
    });
    return router;
}

export default messageRoutes