import { deleteNotification } from "../../application/index";
import { INotifications } from "../../domain/notifications";
import { Request, Response } from "express";
import signale from "signale";

const deleteNotificationController = async (req: Request, res: Response) => {
    try{
        const _id = req.params.id
        const notification: INotifications = await deleteNotification(_id)
        return res.status(200).send({ message: "Notificación eliminada", Notification: notification })
    } catch (error: any) {
        signale.fatal(new Error("Error al eliminar la notificación"))
        return res.status(500).send({ error: error.message })
    }
}

export default deleteNotificationController