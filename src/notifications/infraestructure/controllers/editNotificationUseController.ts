import { editNotification } from "../../application/index";
import { INotifications } from "../../domain/notifications";
import { Request, Response } from "express";
import signale from "signale";


const editNotificationController = async (req: Request, res: Response) => {
    try{
        const _id = req.params._id
        const notification: INotifications = await editNotification(_id, req.body)
        return res.status(201).json(notification)
    } catch (error: any) {
        signale.fatal(new Error("Error al editar la notificación"))
        return res.status(500).send({ error: error.message })
    }
}

export default editNotificationController