import { IMessages } from "../messages/domain/messages";

export default interface IMessageRepository {
    deleteMessage(_id: string): Promise<IMessages>
    editMessage(_id: string, message: IMessages): Promise<IMessages>
    listMessage(_id: string): Promise<IMessages[]>
    submitMessage(message: IMessages): Promise<IMessages>
}