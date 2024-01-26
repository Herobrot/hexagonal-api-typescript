import { IMessages } from "../domain/messages";
import IMessageRepository from "../domain/messageRepository";


const editMessageUseCase = async (repository: IMessageRepository, _id: string | object, message: IMessages ) => {
    return await repository.editMessage(_id, message)   
};

export default editMessageUseCase