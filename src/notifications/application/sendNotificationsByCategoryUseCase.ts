import INotificationsRepository from "../domain/notificationsRepository"
import { INotifications } from "../domain/notifications"


const sendNotificationsByCategoryUserUseCase = async (repository: INotificationsRepository, message: INotifications) => {
    return await repository.sendNotificationByCategoryUser(message)
}

export default sendNotificationsByCategoryUserUseCase;