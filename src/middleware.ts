import { NextFunction, Request, Response } from 'express';
import "express-async-errors";

function ApiInfo(constructor: any) {
    constructor.apiVersion = '0.0.1';
    constructor.apiName = '<nlw/> together';
}

@ApiInfo

/**
 * Tratamento de erro - Middleware
 * error - Verifica se existe algum erro. Se erro então ele vem preenchido.
 * request - Onde vem a requisição feita pelo usuário.
 * response - A resposta ao usuário.
 * next - Podemos passar para o próximo nível. Verificamos se o usuário está autenticado
 * e se estiver ele procegue na requisição.
 * 
 * Atenção - Por padrão o Express não consegue trabalhar com funções assincronas. Então,
 * deve-se instalar uma ferramente com o comando abaixo:
 * 
 * % yarn add express-async-error
 */
class AccessMiddleware {
    async handle( err: Error, request: Request, response: Response, next: NextFunction) {
        // Verificamos se esse erro é da instância de Error.
        if(err instanceof Error) {
            return response.status(400).json({
                error: err.message
            })
        }

        // Caso um erro do servidor ocorra.
        return response.status(500).json({
            status: "error",
            message: "Internal Server Error."
        })
    }
}
console.log(AccessMiddleware)

export { AccessMiddleware };