import { Request, Response } from "express";
import { IUser } from "../../domain/user";
import { editUser } from "../../application";
import signale from "signale";
import bcrypt from 'bcrypt';

const editUserController = async (req: Request, res: Response): Promise<any> => {
    try{
        const _id = req.params._id;
        const user: IUser = {
            name: req.body.name,
            lastName: req.body.lastName,
            badgeNumber: req.body.badgeNumber,
            password: bcrypt.hashSync(req.body.password, parseInt(process.env.SALT_ROUNDS_BCRYPT!)),
            role: req.body.role
        };
        const editedUser: IUser = await editUser(_id, user);
        return res.status(201).json({ message: "Usuario editado", editedUser });
    } catch (error){
        signale.fatal(new Error("Error al editar el usuario"))
        res.status(404).send({ message: "No se encontró el usuario" })
    }
}

export default editUserController