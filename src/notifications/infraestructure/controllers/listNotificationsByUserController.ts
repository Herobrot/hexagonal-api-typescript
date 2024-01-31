import { listNotificationsByUser } from "../../application/index";
import { INotifications } from "../../domain/notifications";
import { Request, Response } from "express";
import signale from "signale";

const listNotificationsByUserController = async (req: Request, res: Response) => {
    try{
        const idUser = req.params.idUser
        const notifications: INotifications[] = await listNotificationsByUser(idUser)
        return res.status(200).json({ message: "Notificaciones listadas", Notifications: notifications })
    } catch (error: any) {
        signale.fatal(new Error("Error al listar las notificaciones"))
        return res.status(500).send({ error: error.message })
    }
}

export default listNotificationsByUserController