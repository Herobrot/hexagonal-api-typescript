import { IUser } from "../domain/user";
import IUserRepository from "../domain/userRepository";
import { User } from "./model/userModel";

export const userAdapter = (): IUserRepository => {
    return{
        createUser: async (user: IUser): Promise<IUser> => {
            const check = await User.findOne({badgeNumber: user.badgeNumber});
            if(check) { throw new Error("El usuario ya existe") }
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
        },
        loginUser: async (user: IUser): Promise<IUser> => {
            const result = await User.findOne({badgeNumber: user.badgeNumber});
            if(!result) { throw new Error("No se encontro el usuario") }
            return result;
        }
    };
}

export default userAdapter;