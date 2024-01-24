export interface INotifications {
    title: string;
    body: string;
    date: Date;
    category: string;
    categoryUser: string[];
    idUser?: string;
}

export enum ECategoryNotifications {
    "Recordatorio" = "Recordatorio",
    "Registro" = "Registro",
    "Estatus" = "Estatus",
}