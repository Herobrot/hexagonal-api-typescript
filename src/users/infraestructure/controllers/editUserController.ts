import { Request, Response } from "express";
import { IUser } from "../../domain/user";
import { editUser } from "../../application";
import signale from "signale";

const editUserController = async (req: Request, res: Response): Promise<any> => {
    try{
        const _id = req.params._id;
        const user: IUser = req.body;
        const editedUser: IUser = await editUser(_id, user);
        return res.status(200).send({ message: "Usuario editado", User: editedUser});
    } catch (error){
        signale.fatal(new Error("Error al editar el usuario"))
        res.status(404).send({ message: "No se encontró el usuario" })
    }
}

export default editUserController