import { IMessages } from "../../domain/messages";
import IMessageRepository  from "../../../repositories/messageRepository";
import { Messages } from "../model/messageModel";
import signale from "signale";

const MessageAdapter = (): IMessageRepository => {
    return{
        deleteMessage: async (_id: object): Promise<IMessages> => {
            try{
                const result = await Messages.findByIdAndDelete(_id);
                if(!result) { throw signale.fatal(new Error("No se encontro el mensaje")); }
                return result;
            } catch (error: any) {
                throw signale.fatal(new Error("Error al eliminar el mensaje"));
            }
        },
        editMessage: async (_id: object, message: IMessages): Promise<IMessages> => {
            try{
                const result = await Messages.findByIdAndUpdate(_id, message);
                if(!result) { throw signale.fatal(new Error("No se encontro el mensaje")); }
                return result;
            } catch (error: any) {
                throw signale.fatal(new Error("Error al editar el mensaje"));
            }
        },
        listMessage: async (_id: object): Promise<IMessages[]> => {
            try{
                const result = await Messages.aggregate([
                    {
                        $lookup: {
                            from: 'users',
                            localField: '_idUsuario',
                            foreignField: '_id',
                            as: 'user'
                        }
                    },
                    {
                        $match: {
                            _id: _id
                        }
                    }
                ]);
                if(!result) { throw signale.fatal(new Error("No se encontro el mensaje")); }
                return result;
            } catch (error: any) {
                throw signale.fatal(new Error("Error al listar el mensaje"));
            }
        },
        submitMessage: async (message: IMessages): Promise<IMessages> => {
            try{
                const result = await Messages.create(message);
                if(!result) { throw signale.fatal(new Error("No se encontro el mensaje")); }
                return result;
            } catch (error: any) {
                throw signale.fatal(new Error("Error al enviar el mensaje"));
            }
        }
        
    };
};

export default MessageAdapter