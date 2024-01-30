import IMessageRepository from "../domain/messageRepository";

const getMessageByIdUseCase = async (repository: IMessageRepository, _id: string | object) => {
    return await repository.getMessageById(_id)
}

export default getMessageByIdUseCase
