import express, { Router } from "express";
import submitMessageController from "./controllers/submitMessageController";
import listMessageController from "./controllers/listMessageController";
import editMessageController from "./controllers/editMessageController";
import deleteMessageController from "./controllers/deleteMessageController";
import getMessageByIdController from "./controllers/getMessageByIdController";

const router: Router = express.Router();
const messageRoutes = (app: Router) => {
    router.post("/", (req, res) => {
        submitMessageController(req, res)
    });
    router.get("/:_id", (req, res) => {
        getMessageByIdController(req, res)
    })
    router.get("/users/:_idUser", (req, res) => {
        listMessageController(req, res)
    });
    router.put("/:_id", (req, res) => {
        editMessageController(req, res)
    });
    router.delete("/:_id", (req, res) => {
        deleteMessageController(req, res)
    });
    return router;
}

export default messageRoutes