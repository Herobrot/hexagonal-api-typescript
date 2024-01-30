import MessageAdapter from "../infraestructure/messageAdapter";
import { IMessages } from "../domain/messages";
import deleteMessageUseCase from "./deleteMessageUseCase";
import editMessageUseCase from "./editMessageUseCase";
import listMessageUseCase from "./listMessageUseCase";
import submitMessageUseCase from "./submitMessageUseCase";
import getMessageByIdUseCase from "./getMessageByIdUseCase";


export const deleteMessage = (_id: string | object) => deleteMessageUseCase(MessageAdapter(), _id);
export const editMessage = (_id: string | object, message: IMessages) => editMessageUseCase(MessageAdapter(), _id, message);
export const listMessage = (_id: string | object) => listMessageUseCase(MessageAdapter(), _id);
export const submitMessage = (message: IMessages) => submitMessageUseCase(MessageAdapter(), message);
export const getMessageById = (_id: string | object) => getMessageByIdUseCase(MessageAdapter(), _id);