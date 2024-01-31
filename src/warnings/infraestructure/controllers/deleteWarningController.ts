import { Request, Response } from "express";
import { deleteWarning } from "../../application";
import signale from "signale";

const deleteWarningController = async (req: Request, res: Response) => {
    try {
        const _id = req.params._id
        await deleteWarning(_id)
        return res.status(204).json({message: "Advertencia eliminada"})
    } catch (error: any) {
        signale.fatal(new Error("Error al eliminar la advertencia"))
        return res.status(404).send({ message: "Advertencia no encontrada" })
    }
}

export default deleteWarningController