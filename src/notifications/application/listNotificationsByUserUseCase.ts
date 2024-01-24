import INotificationsRepository from "../../repositories/notificationsRepository";

const listNotificationsByUserUseCase = async (repository: INotificationsRepository, idUser: string) => {
    return await repository.listNotificationsByUser(idUser)
}

export default listNotificationsByUserUseCase