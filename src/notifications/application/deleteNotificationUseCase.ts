import INotificationsRepository from "../domain/notificationsRepository";

const deleteNotificationUseCase = async (repository: INotificationsRepository, _id: string | object) => {
    return await repository.deleteNotification(_id)
}

export default deleteNotificationUseCase