import { IWarning } from "../domain/warning";
import IWarningRepository from "../domain/warningRepository";

const editWarningUserCase = async (warningRepository: IWarningRepository, _id: string | object, warning: IWarning) => {
    return await warningRepository.editWarning(_id, warning);
}

export default editWarningUserCase