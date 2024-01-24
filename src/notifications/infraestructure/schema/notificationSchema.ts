import { Schema } from "mongoose";
import { INotifications, ECategoryNotifications} from "../../domain/notifications";

const notificationsSchema = new Schema<INotifications>({
    title: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, required: true },
    category: { type: String, required: true, enum: ECategoryNotifications },
    idUser: { type: Schema.Types.ObjectId, required: true, ref: 'Users' }
});

export default notificationsSchema