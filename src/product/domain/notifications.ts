import { Schema, model } from "mongoose";

interface INotifications {
    title: string;
    body: string;
    date: Date;
    category: string;
    idUser: Schema.Types.ObjectId;
}

enum ECategory {
    "Recordatorio" = "Recordatorio",
    "Registro" = "Registro",
    "Estatus" = "Estatus",
}

const notificationsSchema = new Schema<INotifications>({
    title: { type: String, required: true },
    body: { type: String, required: true },
    date: { type: Date, required: true },
    category: { type: String, required: true, enum: ECategory },
    idUser: { type: Schema.Types.ObjectId, required: true, ref: 'Users' }
})

const Notifications = model<INotifications>('Notifications', notificationsSchema);

export default Notifications