import { ITokenService } from "../../application/services/ITokenService";
import jwt from 'jsonwebtoken';
import { Request, Response, NextFunction } from "express";
import { User } from "../../domain/user";


interface UserRequest extends Request {
    user: User
}

export class TokenService implements ITokenService {
    generateToken(payload: string): string {
        return jwt.sign(payload, process.env.SECRET_JWT!, { expiresIn: '1h' });
    }
    verifyToken(req: UserRequest, res: Response, next: NextFunction) {
        const token = req.headers['authorization'];
        if (!token) {
            return res.status(403).send({ message: "No token provided" });
        }
        jwt.verify(token, process.env.SECRET_JWT!, (err: any, user: any) => {
            if (err) {
                return res.status(401).send({ message: "Unauthorized" });
            }
            req.user = user;
            next();
        });
    }
}