import express, { Application } from "express";
import cors from "cors";
import morgan from "morgan";
import signale from "signale";
import helmet from "helmet";
import messageRoutes from "./messages/infraestructure/messageRoutes";
import notificationRoutes from "./notifications/infraestructure/notificationsRoutes";
import userRoutes from "./users/infraestructure/userRoutes";
import warningRoutes from "./warnings/infraestructure/warningRoutes";

export const createServer = (port: number) => {
    const app: Application = express();
    let corsOptions = {
        origin: "localhost:3000",
    }
    app.use(express.json());
    app.use(cors(corsOptions));
    app.use(morgan('dev'));
    app.use(helmet());
    app.use(express.urlencoded({ extended: true }));

    app.use("/messages", messageRoutes(app));
    app.use("/notifications", notificationRoutes(app));
    app.use("/users", userRoutes(app));
    app.use("/warnings", warningRoutes(app));

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