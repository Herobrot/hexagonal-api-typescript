import MessageAdapter from "../infraestructure/adapter/messageAdapter";
import { IMessages } from "../domain/messages";
import deleteMessageUseCase from "./deleteMessageUseCase";
import editMessageUseCase from "./editMessageUseCase";
import listMessageUseCase from "./listMessageUseCase";
import submitMessageUseCase from "./submitMessageUseCase";


export const deleteMessage = (_id: string) => deleteMessageUseCase(MessageAdapter(), _id);
export const editMessage = (_id: string, message: IMessages) => editMessageUseCase(MessageAdapter(), _id, message);
export const listMessage = (_id: string) => listMessageUseCase(MessageAdapter(), _id);
export const submitMessage = (message: IMessages) => submitMessageUseCase(MessageAdapter(), message);