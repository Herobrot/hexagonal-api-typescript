import express, { Router } from "express";
import createUserController from "./controllers/createUserController";
import getListOfUsersByRoleController from "./controllers/getListOfUsersByRoleController";
import editUserController from "./controllers/editUserController";
import deleteUserController from "./controllers/deleteUserController";
import loginUserController from "./controllers/loginUserController";

const router: Router = express.Router();
const userRoutes = (app: Router) => {
    router.post("/", (req, res) => {
        createUserController(req, res)
    });
    router.post("/user", (req, res) => {
        loginUserController(req, res)
    });
    router.get("/category/:role", (req, res) => {
        getListOfUsersByRoleController(req, res)
    });
    router.put("/:_id", (req, res) => {
        editUserController(req, res)
    });
    router.delete("/:_id", (req, res) => {
        deleteUserController(req, res)
    });
    return router;
}

export default userRoutes