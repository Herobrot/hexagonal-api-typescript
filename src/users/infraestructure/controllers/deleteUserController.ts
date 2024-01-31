import { Request, Response } from "express";
import { deleteUser } from "../../application";
import signale from "signale";

const deleteUserController = async (req: Request, res: Response): Promise<any> => {
    try{
        const _id = req.params._id;
        await deleteUser(_id);
        return res.status(204).json({ message: "Usuario eliminado" });
    } catch (error){
        signale.fatal(new Error("No se encontró el usuario"))
        res.status(404).send({ message: "No se encontró el usuario" })
    }
}

export default deleteUserController