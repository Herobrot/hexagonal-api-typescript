import createWarningUserCase from "./createWarningUserCase";
import deleteWarningUserCase from "./deleteWarningUserCase";
import getWarningsByRoleUserCase from "./getWarningsByRoleUserCase";
import editWarningUserCase from "./editWarningUserCase";
import WarningAdapter from "../infraestructure/warningAdapter";
import { IWarning } from "../domain/warning";

export const getWarningsByRole = (role: string) => getWarningsByRoleUserCase(WarningAdapter(), role);
export const createWarning = (warning: IWarning) => createWarningUserCase(WarningAdapter(), warning);
export const deleteWarning = (_id: string | object) => deleteWarningUserCase(WarningAdapter(), _id);
export const editWarning = (_id: string | object, warning: IWarning) => editWarningUserCase(WarningAdapter(), _id, warning);
