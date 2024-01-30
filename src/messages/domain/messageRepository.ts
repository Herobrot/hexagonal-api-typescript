import { IMessages } from "./messages";

export default interface IMessageRepository {
    deleteMessage(_id: string | object): Promise<IMessages>
    editMessage(_id: string | object, message: IMessages): Promise<IMessages>
    listMessage(_id: string | object): Promise<IMessages[]>
    submitMessage(message: IMessages): Promise<IMessages>
    getMessageById(_id: string | object): Promise<IMessages>
}