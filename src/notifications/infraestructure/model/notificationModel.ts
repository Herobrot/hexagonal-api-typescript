import { model } from "mongoose";
import { INotifications } from "../../domain/notifications";
import notificationsSchema from "../schema/notificationSchema";

export const Notifications = model<INotifications>('Notifications', notificationsSchema)