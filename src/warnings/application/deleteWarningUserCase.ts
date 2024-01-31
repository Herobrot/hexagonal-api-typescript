import IWarningRepository from "../domain/warningRepository";

const deleteWarningUserCase = async (warningRepository: IWarningRepository, _id: string | object) => {
    return await warningRepository.deleteWarning(_id);
}

export default deleteWarningUserCase