import IUserRepository from "../domain/userRepository";
import { IUser } from "../domain/user";

const loginUserUseCase = async (userRepository: IUserRepository, user: IUser) => {
    return await userRepository.loginUser(user)
}

export default loginUserUseCase