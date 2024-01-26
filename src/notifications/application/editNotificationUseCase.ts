import INotificationsRepository from "../domain/notificationsRepository";
import { INotifications } from "../domain/notifications";

const editNotificationUseCase = async (repository: INotificationsRepository, _id: string | object, notification: INotifications) => {
    return await repository.editNotification(_id, notification)
}

export default editNotificationUseCase