export interface IWarning {
    message: string
    date: Date
    category: string
    status: string
    roleUser: string
}

export enum ECategoryWarning{
    "Robo" = "Robo",
    "Accidente" = "Accidente",
    "Avistamiento" = "Avistamiento",
    "Secuestro" = "Secuestro",
    "Vandalismo" = "Vandalismo",
    "Allanamiento de morada" = "Allanamiento de morada",
    "Trata de personas" = "Trata de personas",
    "Otros" = "Otros"
}