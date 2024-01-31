import { editWarning } from "../../application";
import { Request, Response } from "express";
import { IWarning } from "../../domain/warning";
import signale from "signale";

const editWarningController = async (req: Request, res: Response) => {
    try {
        const _id = req.params._id
        const warning: IWarning = req.body
        const result = await editWarning(_id, warning)
        return res.status(201).json(result)
    } catch (error: any) {
        signale.fatal(new Error("Error al editar la advertencia"))
        return res.status(404).send({ message: "Advertencia no encontrada" })
    }
}

export default editWarningController