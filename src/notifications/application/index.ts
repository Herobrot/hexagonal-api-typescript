import { INotifications } from "../domain/notifications";
import NotificationAdapter from "../infraestructure/adapter/notificationAdapter";
import deleteNotificationUseCase from "./deleteNotificationUseCase";
import editNotificationUseCase from "./editNotificationUseCase";
import listNotificationsByUserUseCase from "./listNotificationsByUserUseCase";
import sendNotificationsByCategoryUserUseCase from "./sendNotificationsByCategoryUseCase";

export const deleteNotification = (_id: string | object) => deleteNotificationUseCase(NotificationAdapter(), _id) ;
export const editNotification = (_id: string | object, notification: INotifications) => editNotificationUseCase(NotificationAdapter(), _id, notification) ;
export const listNotificationsByUser = (idUser: string | object) => listNotificationsByUserUseCase(NotificationAdapter(), idUser) ;
export const sendNotificationsByCategoryUser = (notification: INotifications) => sendNotificationsByCategoryUserUseCase(NotificationAdapter(), notification) ;
    