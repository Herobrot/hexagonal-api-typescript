import { Request, Response } from "express";
import { IUser } from "../../domain/user";
import { listUsersByRole } from "../../application";
import signale from "signale";

const getListOfUsersByRoleController = async (req: Request, res: Response) => {
    try{
        const role = req.params.role;
        const users: IUser[] = await listUsersByRole(role);
        return res.status(200).send({ message: "Lista de usuarios por rol", Users: users });
    } catch (error){
        signale.fatal(new Error("Error al obtener la lista de usuarios por rol"));
    }
}

export default getListOfUsersByRoleController