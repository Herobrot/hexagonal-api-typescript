import IMessageRepository from "../../repositories/messageRepository";


const deleteMessageUseCase = async (repository: IMessageRepository, _id: string) => {
    return await repository.deleteMessage(_id)
}

export default deleteMessageUseCase