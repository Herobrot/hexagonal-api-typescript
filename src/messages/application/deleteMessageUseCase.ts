import { IMessages } from "../domain/messages";
import IMessageRepository from "../../repositories/messageRepository";

const deleteMessageUseCase = async (repository: IMessageRepository, _id: object) => {
    return await repository.deleteMessage(_id)
}

export default deleteMessageUseCase