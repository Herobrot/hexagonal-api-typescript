import IWarningRepository from "../domain/warningRepository";
import { IWarning } from "../domain/warning";

const createWarningUserCase = async (warningRepository: IWarningRepository, warning: IWarning) => {
    return await warningRepository.createWarning(warning);
}

export default createWarningUserCase