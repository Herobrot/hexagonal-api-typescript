import { Request, Response } from "express";
import { IUser } from "../../domain/user";
import { createUser } from "../../application";
import signale from "signale";

const createUserController = async (req: Request, res: Response) => {
    try{
        const user: IUser = req.body;
        const newUser = await createUser(user);
        return res.status(200).send({ message: "Usuario creado", User: newUser });
    } catch (error: any){
        signale.fatal(new Error("Error al crear el usuario"));
        res.status(500).send({ error: error.message });
    }
}

export default createUserController