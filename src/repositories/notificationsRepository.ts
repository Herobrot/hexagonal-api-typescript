import { INotifications } from "../notifications/domain/notifications";

export default interface INotificationsRepository {
    sendNotificationByCategoryUser(notification: INotifications): Promise<INotifications>
    listNotificationsByUser(idUser: string): Promise<INotifications[]>
    deleteNotification(_id: string): Promise<INotifications>
    editNotification(_id: string, notification: INotifications): Promise<INotifications>
}