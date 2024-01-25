import { IUser } from "../users/domain/user";

export default interface IUserRepository {
    createUser(user: IUser): Promise<IUser>
    getListOfUsersByRole(role: string): Promise<IUser[]>
    deleteUser(_id: string | object): Promise<IUser>
    editUser(_id: string | object, user: IUser): Promise<IUser>
}