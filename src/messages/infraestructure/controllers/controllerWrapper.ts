import { NextFunction, Request, Response } from "express";
import signale from "signale";

export const controllerWrapper = (
    controller: (req: Request, res: Response) => Promise<Response>
) => {
    const run = async (req: Request, res: Response, next: NextFunction) => {
        try{
            await controller(req, res)
        } catch (error: unknown) {
            signale.fatal(new Error("Error al ejecutar el controlador"));
            if(error instanceof Error) {
                return res.status(400).send({ error: error.message })
            }
            return next(error)
        } 
    };
    return run;
}