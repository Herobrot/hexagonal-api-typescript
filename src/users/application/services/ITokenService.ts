export interface ITokenService {
    generateToken(payload: any): string
    verifyToken(req: any, res: any, next: any): any
}