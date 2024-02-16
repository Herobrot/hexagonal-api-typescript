import express, { Router } from "express";
import { createUserController } from "./dependencies";
import { editUserController } from "./dependencies";
import { deleteUserController } from "./dependencies";
import { loginUserController } from "./dependencies";
import { getListOfUsersByRoleController } from "./dependencies";


const router: Router = express.Router();

router.post("/", createUserController.run.bind(createUserController));
router.post("/user", loginUserController.run.bind(loginUserController));
router.get("/category/:role", getListOfUsersByRoleController.run.bind(getListOfUsersByRoleController));
router.put("/:_id", editUserController.run.bind(editUserController));
router.delete("/:_id", deleteUserController.run.bind(deleteUserController));

export default router;