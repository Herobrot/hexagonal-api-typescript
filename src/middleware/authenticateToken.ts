import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

interface IUserRequest extends Request {
    user: any
}

export default function authenticateToken(req: IUserRequest, res: Response, next: NextFunction) {
    const authHeader = req.headers['authorization']
    if(!authHeader){
        return res.status(401).send({message: "No autorizado"})
    }

    jwt.verify(authHeader, process.env.JWT_SECRET_KEY!, (err, user) => {
        if(err){
            return res.status(403).send({message: "Token no valido"})
        }
        req.user = user
        next()
    })
}