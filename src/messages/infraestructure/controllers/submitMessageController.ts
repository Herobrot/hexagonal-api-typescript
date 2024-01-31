import { Request, Response } from "express";
import signale from "signale";
import { submitMessage } from "../../application";
import { IMessages } from "../../domain/messages";

const submitMessageController = async (req: Request, res: Response) => {
    try{
        const message: IMessages = req.body
        const result = await submitMessage(message)
        return res.status(201).json(result)
    } catch (error: any) {
        signale.fatal(new Error("Error al enviar el mensaje"))
        return res.status(500).send({ error: error.message })
    }
}

export default submitMessageController