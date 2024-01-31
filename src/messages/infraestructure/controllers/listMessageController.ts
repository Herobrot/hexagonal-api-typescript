import { Request, Response } from "express";
import signale from "signale";
import { IMessages } from "../../domain/messages";
import { listMessage } from "../../application";

const listMessageController = async (req: Request, res: Response) => {
    try {
        const _id = req.params.id
        const message: IMessages[] = await listMessage(_id)
        return res.status(200).json({ message: "Listado de mensajes", Messages: message })
    } catch (error: any) {
        signale.fatal(new Error("Error al listar los mensajes"))
        return res.status(500).send({ error: error.message })
    }
}

export default listMessageController