import INotificationsRepository from "../../repositories/notificationsRepository";
import { INotifications } from "../domain/notifications";

const editNotificationUseCase = async (repository: INotificationsRepository, _id: string, notification: INotifications) => {
    return await repository.editNotification(_id, notification)
}

export default editNotificationUseCase