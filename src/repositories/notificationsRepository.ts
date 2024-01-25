import { INotifications } from "../notifications/domain/notifications";

export default interface INotificationsRepository {
    sendNotificationByCategoryUser(notification: INotifications): Promise<INotifications>
    listNotificationsByUser(idUser: string | object): Promise<INotifications[]>
    deleteNotification(_id: string | object): Promise<INotifications>
    editNotification(_id: string | object, notification: INotifications): Promise<INotifications>
}