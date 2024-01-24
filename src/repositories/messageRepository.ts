import { IMessages } from "../messages/domain/messages";


export default interface IMessageRepository {
    deleteMessage(_id: object): Promise<IMessages>
    editMessage(_id: object, message: IMessages): Promise<IMessages>
    listMessage(_id: object): Promise<IMessages[]>
    submitMessage(message: IMessages): Promise<IMessages>
}