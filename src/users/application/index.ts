import { IUser } from "../domain/user";
import getListOfUsersUseCase from "./getListOfUsersByRoleUseCase";
import deleteUserUseCase from "./deleteUserUseCase";
import editUserUseCase from "./editUserUseCase";
import createUserUseCase from "./createUserUseCase";
import userAdapter from "../infraestructure/adapter/userAdapter";

export const listUsersByRole = (role: string) => getListOfUsersUseCase(userAdapter(), role);
export const deleteUser = (_id: string | object) => deleteUserUseCase(userAdapter(), _id);
export const editUser = (_id: string | object, user: IUser) => editUserUseCase(userAdapter(), _id, user);
export const createUser = (user: IUser) => createUserUseCase(userAdapter(), user);
