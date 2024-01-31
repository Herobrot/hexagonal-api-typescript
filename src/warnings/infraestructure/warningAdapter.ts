import { IWarning } from "../domain/warning";
import IWarningRepository from "../domain/warningRepository";
import { Warning } from "./model/warningModel";
import signale from "signale";

const warningAdapter = (): IWarningRepository => {
    return{
        getWarningsByRole: async (role: string): Promise<IWarning[]> => {
            const result = await Warning.find({ roleUser: role });
            if(!result) { throw signale.fatal(new Error("No se encontraron advertencias")); }
            return result;
        },
        createWarning: async (warning: IWarning): Promise<IWarning> => {
            const result = await Warning.create(warning);
            if(!result) { throw signale.fatal(new Error("No se pudo registrar la advertencia")); }
            return result;
        },
        deleteWarning: async (_id: string | object): Promise<IWarning> => {
            const result = await Warning.findByIdAndDelete(_id);
            if(!result) { throw signale.fatal(new Error("No se pudo eliminar la advertencia")); }
            return result;
        },
        editWarning: async (_id: string | object, warning: IWarning): Promise<IWarning> => {
            const result = await Warning.findByIdAndUpdate(_id, warning);
            if(!result) { throw signale.fatal(new Error("No se pudo editar la advertencia")); }
            return result;
        }
    }    
}

export default warningAdapter