import { IUser } from "../../domain/user";
import IUserRepository from "../../../repositories/userRepository";
import { User } from "../model/userModel";

export const userAdapter = (): IUserRepository => {
    return{
        createUser: async (user: IUser): Promise<IUser> => {
            const result = await User.create(user);
            return result;
        },
        deleteUser: async (_id: string | object): Promise<IUser> => {
            const result = await User.findByIdAndDelete(_id);
            if(!result) { throw new Error("No se encontro el usuario") }
            return result;
        },
        editUser: async (_id: string | object, user: IUser): Promise<IUser> => {
            const result = await User.findByIdAndUpdate(_id, user, {new: true});
            if(!result) { throw new Error("No se encontro el usuario") }
            return result;
        },
        getListOfUsersByRole: async (role: string): Promise<IUser[]> => {
            const result = await User.find({role: role});
            return result;
        }
    };
}

export default userAdapter;