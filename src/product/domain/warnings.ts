import { Schema, model } from "mongoose";

interface IWarnings {
    messages: string
    date: Date
    category: string
    status: string
}

enum ECategory {
    "Robo" = "Robo",
    "Accidente" = "Accidente",
    "Avistamiento" = "Avistamiento",
    "Secuestro" = "Secuestro",
    "Vandalismo" = "Vandalismo",
    "Allanamiento de morada" = "Allanamiento de morada",
    "Trata de personas" = "Trata de personas",
    "Otros" = "Otros"
}

enum EStatus {
    "Reciente" = "Reciente",
    "En curso" = "En curso",
    "Finalizado" = "Finalizado"
}

const warningsSchema = new Schema({
    message: { type: String, required: true },
    date: { type: Date, required: true },
    category: { type: String, required: true, enum: ECategory },
    status: { type: String, required: true, enum: EStatus }
})

const Warnings = model<IWarnings>('Warnings', warningsSchema);

export default Warnings