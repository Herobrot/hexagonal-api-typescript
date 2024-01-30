import { Request, Response } from "express";
import { IUser } from "../../domain/user";
import { createUser } from "../../application";
import signale from "signale";
import bcrypt from 'bcrypt';
import createToken from "../../../middleware/createToken";

const createUserController = async (req: Request, res: Response): Promise<any> => {
    try{
        if(!process.env.SALT_ROUNDS_BCRYPT){
            return res.status(500).send({ message: "Error al crear el usuario" });
        }

        const user: IUser = {
            name: req.body.name,
            lastName: req.body.lastName,
            badgeNumber: req.body.badgeNumber,
            password: bcrypt.hashSync(req.body.password, parseInt(process.env.SALT_ROUNDS_BCRYPT)),
            role: req.body.role
        };

        const newUser = await createUser(user);
        
        if(newUser){
            const token = createToken(newUser.badgeNumber);
            return res.status(201).json({ token, newUser });
        } else{
            return res.status(500).send({ message: "Error al crear el token" });
        }
    } catch (error: any){
        signale.fatal(new Error("Error al crear el usuario"));
        res.status(500).send({ error: error.message });
    }
}



export default createUserController