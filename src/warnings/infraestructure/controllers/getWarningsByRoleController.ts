import { Request, Response } from "express";
import { getWarningsByRole } from "../../application";
import signale from "signale";

const getWarningsByRoleController = async (req: Request, res: Response) => {
    try {
        const role = req.params.role
        const result = await getWarningsByRole(role)
        return res.status(200).json({Avisos: result})
    } catch (error: any) {
        signale.fatal(new Error("Error al obtener las advertencias por rol"))
        return res.status(404).send({ message: "No se encontraron advertencias" })
    }
}

export default getWarningsByRoleController