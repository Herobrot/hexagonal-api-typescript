import { IMessages } from "../../domain/messages";
import { editMessage } from "../../application";
import { Request, Response } from "express";
import signale from "signale";

const editMessageController = async (req: Request, res: Response) => {
    try {
        const _id = req.params.id
        const message: IMessages = req.body
        const result = await editMessage(_id, message)
        return res.status(200).json({ message: "Mensaje editado", Message: result })
    } catch (error: any) {
        signale.fatal(new Error("Error al editar el mensaje"))
        return res.status(500).send({ error: error.message })
    }
}

export default editMessageController
