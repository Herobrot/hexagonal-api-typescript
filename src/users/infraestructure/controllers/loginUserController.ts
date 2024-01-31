import { IUser } from "../../domain/user";
import { Request, Response } from "express";
import { loginUser } from "../../application";
import signale from "signale";
import bcrypt from 'bcrypt';
import createToken from "../../../middleware/createToken";


const loginUserController = async (req: Request, res: Response): Promise<any> => {
    try {
        const user: IUser = req.body;
        const userFound = await loginUser(user);
        const isCorrectPassword = await bcrypt.compare(user.password, userFound.password);
        
        if(!isCorrectPassword) {
            return res.status(401).send({ message: "Contraseña incorrecta" });
        }

        const token = createToken(userFound.badgeNumber);
        return res.status(201).json({ token, userFound });
    } catch (error: any) {
        signale.fatal(new Error("Error al iniciar sesión"));
        res.status(404).send({ message: "No se encontro el usuario" });
    }
}


export default loginUserController;
