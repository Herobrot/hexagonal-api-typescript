import { IMessages } from "../domain/messages";
import IMessageRepository from "../../repositories/messageRepository";


const editMessageUseCase = async (repository: IMessageRepository, _id: string, message: IMessages ) => {
    return await repository.editMessage(_id, message)   
};

export default editMessageUseCase