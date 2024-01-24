import { Schema } from "mongoose";

export interface INotifications {
    title: string;
    body: string;
    date: Date;
    category: string;
    idUser: Schema.Types.ObjectId;
}

export enum ECategoryNotifications {
    "Recordatorio" = "Recordatorio",
    "Registro" = "Registro",
    "Estatus" = "Estatus",
}