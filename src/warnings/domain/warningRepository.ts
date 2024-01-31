import { IWarning } from "./warning";

export default interface IWarningRepository {
    getWarningsByRole(role: string): Promise<IWarning[]>;
    createWarning(warning: IWarning): Promise<IWarning>;
    deleteWarning(_id: string | object): Promise<IWarning>;
    editWarning(_id: string | object, warning: IWarning): Promise<IWarning>;
}