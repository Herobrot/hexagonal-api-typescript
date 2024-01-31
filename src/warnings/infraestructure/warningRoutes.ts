import express, { Router } from "express";
import createWarningController from "./controllers/createWarningController";
import getWarningsByRoleController from "./controllers/getWarningsByRoleController";
import deleteWarningController from "./controllers/deleteWarningController";
import editWarningController from "./controllers/editWarningController";

const router: Router = express.Router();
const warningRoutes = (app: Router) => {
    router.get("/:role", (req, res) => {
        getWarningsByRoleController(req, res)
    });

    router.post("/", (req, res) => {
        createWarningController(req, res)
    });
    
    router.put("/:_id", (req, res) => {
        editWarningController(req, res)
    });
    
    router.delete("/:_id", (req, res) => {
        deleteWarningController(req, res)
    });
    return router;
}

export default warningRoutes