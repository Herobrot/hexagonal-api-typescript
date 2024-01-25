import { model } from "mongoose";
import userSchema from "../schema/userSchema";
import { IUser } from "../../domain/user";

export const User = model<IUser>('Users', userSchema)
