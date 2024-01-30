import { IMessages } from "../../domain/messages";
import { Schema } from "mongoose";

const messagesSchema = new Schema<IMessages>({
    message: { type: String, required: true },
    date: { type: Date, required: true },
    _idUser: { type: Schema.Types.ObjectId, required: true, ref: 'Users' },
});

export default messagesSchema