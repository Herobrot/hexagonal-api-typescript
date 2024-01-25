import IMessageRepository from "../../repositories/messageRepository";


const listMessageUseCase = async (repository: IMessageRepository, _id: string | object) => {
    return await repository.listMessage(_id);
}

export default listMessageUseCase