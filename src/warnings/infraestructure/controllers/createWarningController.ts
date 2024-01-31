import { createWarning } from "../../application";
import { Request, Response } from "express";
import { IWarning } from "../../domain/warning";
import signale from "signale";

const createWarningController = async (req: Request, res: Response) => {
    try {
        const warning: IWarning = req.body
        const result = await createWarning(warning)
        return res.status(201).json(result)
    } catch (error: any) {
        signale.fatal(new Error("Error al registrar la advertencia"))
        return res.status(500).send({ error: error.message })
    }
}

export default createWarningController