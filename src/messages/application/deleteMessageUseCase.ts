import IMessageRepository from "../domain/messageRepository";


const deleteMessageUseCase = async (repository: IMessageRepository, _id: string | object) => {
    return await repository.deleteMessage(_id)
}

export default deleteMessageUseCase