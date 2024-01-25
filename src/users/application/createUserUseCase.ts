import { IUser } from "../domain/user";
import IUserRepository from "../../repositories/userRepository";

const createUserUseCase = async (userRepository: IUserRepository, user: IUser) => {
    return await userRepository.createUser(user)
}

export default createUserUseCase