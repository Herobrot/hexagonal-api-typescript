import { deleteMessage } from "../../application/index";
import { Request, Response } from "express";
import signale from "signale";

const deleteMessageController = async (req: Request, res: Response) => {
    try{
        const _id = req.params.id
        await deleteMessage(_id)
        return res.status(200).json({ message: "Mensaje eliminado" })
    } catch (error: any) {
        signale.fatal(new Error("Error al eliminar el mensaje"));
        return res.status(500).send({ error: error.message })
    }
}

export default deleteMessageController
