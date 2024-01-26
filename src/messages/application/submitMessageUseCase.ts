import IMessageRepository from "../domain/messageRepository";
import { IMessages } from "../domain/messages";

const submitMessageUseCase = async (repository: IMessageRepository, message: IMessages) => {
    return await repository.submitMessage(message)
}

export default submitMessageUseCase