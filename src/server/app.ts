import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import signale from "signale";
import helmet from "helmet";

export const createServer = (port: number) => {
    const app: Application = express();
    app.use(express.json());
    app.use(cors());
    app.use(morgan('dev'));
    app.use(helmet());
    app.use(express.urlencoded({ extended: true }));


    return {
        app: app,
        run: () => { runServer(app, port) }
    };
}

const runServer = (app: Application, port: number) => {
    try{
        const server = app.listen(port, ():void => {
            signale.success(`Servidor corriendo en el puerto ${port}`);
        });

        return server;
    } catch (error: any) {
        signale.fatal(new Error(error.message));
    }
}