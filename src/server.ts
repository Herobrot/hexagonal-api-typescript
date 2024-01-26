import database from "./database/database";
import { createServer } from "./app";

export const startApp = () => {
    const port = Number(process.env.PORT);

    database().connect();
    createServer(port).run();
};
startApp();