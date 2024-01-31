import { model } from "mongoose";
import { IWarning } from "../../domain/warning";
import warningSchema from "../schema/warningSchema";

export const Warning = model<IWarning>("Warning", warningSchema);

