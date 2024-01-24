import { sendNotificationsByCategoryUser } from "../../application/index";
import { INotifications } from "../../domain/notifications";
import { Request, Response } from "express";
import signale from "signale";

const sendNotificationsByCategoryController = async (req: Request, res: Response) => {
    try{
        const notification: INotifications = await sendNotificationsByCategoryUser(req.body)
        return res.status(200).send({ message: "Notificación enviada", Notification: notification })
    } catch (error: any) {
        signale.fatal(new Error("Error al enviar la notificación"))
        return res.status(500).send({ error: error.message })
    }
}

export default sendNotificationsByCategoryController