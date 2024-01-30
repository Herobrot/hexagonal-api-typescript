import { Schema } from "mongoose";

export interface IMessages {
    message: string;
    date: Date;
    _idUser: Schema.Types.ObjectId;
}