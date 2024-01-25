import IUserRepository from "../../repositories/userRepository";

const getListOfUsersUseCase = async (userRepository: IUserRepository, role: string) => {
    return await userRepository.getListOfUsersByRole(role);
}

export default getListOfUsersUseCase