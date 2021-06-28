import { Request, Response, NextFunction, response } from "express";



export function ensureAdmin(req: Request, res: Response, next: NextFunction) {
    // Verificar se usuário é Administrador.
    const admin = true;

    if (admin) {
        return next();
    }

    return response.status(401)
}