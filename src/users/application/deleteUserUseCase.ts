import IUserRepository from "../domain/userRepository";

const deleteUserUseCase = async (userRepository: IUserRepository, _id: string | object) => {
    return await userRepository.deleteUser(_id)
}

export default deleteUserUseCase