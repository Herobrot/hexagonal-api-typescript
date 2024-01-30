import { IMessages } from "../../domain/messages";
import { getMessageById } from "../../application";
import { Request, Response } from "express";
import signale from "signale";

const getMessageByIdController = async (req: Request, res: Response) => {
    try {
        const _id = req.params._id
        const message: IMessages = await getMessageById(_id)
        return res.status(200).send({ message: message })
    } catch (error: any) {
        signale.fatal(new Error("Error al buscar el mensaje"))
        return res.status(500).send({ error: error.message })
    }
}

export default getMessageByIdController