import { INotifications } from "../../domain/notifications";
import INotificationsRepository from "../../../repositories/notificationsRepository";
import { Notifications } from "../model/notificationModel";
import signale from "signale";

export const NotificationAdapter = (): INotificationsRepository => {
    return{
        sendNotificationByCategoryUser: async (notification: INotifications): Promise<INotifications> => {
            try{
                const result = await Notifications.create(notification);
                if(!result) { throw signale.fatal(new Error("No se encontro el notificación")); }
                return result;
            } catch (error: any) {
                throw signale.fatal(new Error("Error al enviar la notificación"));
            }
        },
        listNotificationsByUser: async (idUser: string): Promise<INotifications[]> => {
            try{
                const result = await Notifications.aggregate([
                    {
                        $match: {
                            idUser: idUser
                        }
                    }
                ]);
                if(!result) { throw signale.fatal(new Error("No se encontro el notificación")); }
                return result;
            } catch (error: any) {
                throw signale.fatal(new Error("Error al enviar la notificación"));
            }
        },
        deleteNotification: async (_id: string): Promise<INotifications> => {
            try{
                const result = await Notifications.findByIdAndDelete(_id);
                if(!result) { throw signale.fatal(new Error("No se encontro el notificación")); }
                return result;
            } catch (error: any) {
                throw signale.fatal(new Error("Error al enviar la notificación"));
            }
        },
        editNotification: async (_id: string, notification: INotifications): Promise<INotifications> => {
            try{
                const result = await Notifications.findByIdAndUpdate(_id, notification);
                if(!result) { throw signale.fatal(new Error("No se encontro el notificación")); }
                return result;
            } catch (error: any) {
                throw signale.fatal(new Error("Error al enviar la notificación"));
            }
        }
    };
}

export default NotificationAdapter