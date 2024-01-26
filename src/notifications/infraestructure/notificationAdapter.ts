import { INotifications } from "../domain/notifications";
import INotificationsRepository from "../domain/notificationsRepository";
import { Notifications } from "./model/notificationModel";

export const NotificationAdapter = (): INotificationsRepository => {
    return{
        sendNotificationByCategoryUser: async (notification: INotifications): Promise<INotifications> => {            
                const result = await Notifications.create(notification);                
                return result;                
        },
        listNotificationsByUser: async (idUser: string | object): Promise<INotifications[]> => {            
                const result = await Notifications.aggregate([
                    {
                        $match: {
                            idUser: idUser
                        }
                    }
                ]);                
                return result;                
        },
        deleteNotification: async (_id: string | object): Promise<INotifications> => {            
                const result = await Notifications.findByIdAndDelete(_id);
                if(!result){
                    throw new Error("No se encontro la notificación")
                }
                return result;                
        },
        editNotification: async (_id: string | object, notification: INotifications): Promise<INotifications> => {            
                const result = await Notifications.findByIdAndUpdate(_id, notification, {new: true});
                if(!result){
                    throw new Error("No se encontro la notificación")
                }
                return result;                
        }
    };
}

export default NotificationAdapter