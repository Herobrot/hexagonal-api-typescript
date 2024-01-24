import INotificationsRepository from "../../repositories/notificationsRepository";

const deleteNotificationUseCase = async (repository: INotificationsRepository, _id: string) => {
    return await repository.deleteNotification(_id)
}

export default deleteNotificationUseCase