import { Request, Response } from "express";
import { IUser } from "../../domain/user";
import { listUsersByRole } from "../../application";
import signale from "signale";

const getListOfUsersByRoleController = async (req: Request, res: Response): Promise<any> => {
    try{
        const role = req.params.role;
        const users: IUser[] = await listUsersByRole(role);
        return res.status(200).json({ message: "Lista de usuarios por rol", Users: users });
    } catch (error){
        signale.fatal(new Error("Error al obtener la lista de usuarios por rol"));
        res.status(404).send({ message: "No se encontró usuarios con ese rol" });
    }
}

export default getListOfUsersByRoleController