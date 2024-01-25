import { IUser } from "../domain/user";
import IUserRepository from "../../repositories/userRepository";

const editUserUseCase = async (userRepository: IUserRepository, _id: string | object, user: IUser) => {
    return await userRepository.editUser(_id, user)
}

export default editUserUseCase