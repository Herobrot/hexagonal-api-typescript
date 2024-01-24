import signale from "signale";
import IMessageRepository from "../../repositories/messageRepository";

const listMessageUseCase = async (repository: IMessageRepository, _id: object) => {
    return await repository.listMessage(_id);
}

export default listMessageUseCase