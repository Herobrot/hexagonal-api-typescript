import { Schema } from "mongoose";
import { IWarning, ECategoryWarning, EStatusWarning } from "../../domain/warning";

const warningSchema = new Schema<IWarning>({
    message: { type: String, required: true },
    date: { type: Date, required: true },
    category: { type: String, enum: ECategoryWarning, required: true },
    status: { type: String, enum: EStatusWarning, required: true },
    roleUser: { type: String, required: true }
})

export default warningSchema