import IWarningRepository from "../domain/warningRepository";

const getWarningsByRoleUserCase = async (warningRepository: IWarningRepository, role: string) => {
    return await warningRepository.getWarningsByRole(role);
}

export default getWarningsByRoleUserCase