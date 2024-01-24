import { model } from "mongoose";
import { IMessages } from "../../domain/messages";
import messagesSchema from "../schema/messageSchema";

export const Messages = model<IMessages>('Messages', messagesSchema)