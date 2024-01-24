import INotificationsRepository from "../../repositories/notificationsRepository"
import { INotifications } from "../domain/notifications"


const sendNotificationsByCategoryUserUseCase = async (repository: INotificationsRepository, message: INotifications) => {
    return await repository.sendNotificationByCategoryUser(message)
}

export default sendNotificationsByCategoryUserUseCase;