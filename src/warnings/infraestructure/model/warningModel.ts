import { model } from "mongoose";
import { IWarning } from "../../domain/warning";
import warningSchema from "../schema/warningSchema";

export const WarningModel = model<IWarning>("Warning", warningSchema);

