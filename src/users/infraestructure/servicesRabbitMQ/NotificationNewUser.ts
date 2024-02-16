import signale from "signale";
import { INotificationNewUser } from "../../domain/services/INotificationNewUser";
import { User } from "../../domain/user";
import amqplib from "amqplib";

export class NotificacionNewUser implements INotificationNewUser {
    async sendNotification(user: User): Promise<boolean> {
        const conn = await amqplib.connect(process.env.AMQP_URL!.toString());
        const ch = await conn.createChannel()
        const result = ch.publish("upchiapas.compol", "", Buffer.from(JSON.stringify(user)));
        signale.success("Se ha publicado en el exchange");
        return result
    }
}