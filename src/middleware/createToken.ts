import jwt from "jsonwebtoken";

export default function createToken(id: string) {
    const payload = { id };
    const jwtSecretKey: string = process.env.SECRET_JWT!.toString();
    return jwt.sign(payload, jwtSecretKey, { expiresIn: '1h' });
}