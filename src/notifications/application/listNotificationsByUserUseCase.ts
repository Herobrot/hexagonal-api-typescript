import INotificationsRepository from "../../repositories/notificationsRepository";

const listNotificationsByUserUseCase = async (repository: INotificationsRepository, idUser: string | object) => {
    return await repository.listNotificationsByUser(idUser)
}

export default listNotificationsByUserUseCase