import { Schema } from "mongoose";

export interface IMessages {
    message: string;
    date: Date;
    _idUsuario: Schema.Types.ObjectId;
}