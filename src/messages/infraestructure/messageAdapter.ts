import { IMessages } from "../domain/messages";
import IMessageRepository  from "../domain/messageRepository";
import { Messages } from "./model/messageModel";
import signale from "signale";


const MessageAdapter = (): IMessageRepository => {
    return{
        deleteMessage: async (_id: string | object): Promise<IMessages> => {            
                const result = await Messages.findByIdAndDelete(_id);
                if(!result) { throw signale.fatal(new Error("No se encontro el mensaje")); }
                return result;
        },
        editMessage: async (_id: string | object, message: IMessages): Promise<IMessages> => {            
                const result = await Messages.findByIdAndUpdate(_id, message);
                if(!result) { throw signale.fatal(new Error("No se encontro el mensaje")); }
                return result;
        },
        listMessage: async (_id: string | object): Promise<IMessages[]> => {            
                console.log(_id)
                const result = await Messages.find({_idUsuario: _id});
                if(!result) { throw signale.fatal(new Error("No se encontro el mensaje")); }
                return result;
        },
        submitMessage: async (message: IMessages): Promise<IMessages> => {            
                const result = await Messages.create(message);
                if(!result) { throw signale.fatal(new Error("No se encontro el mensaje")); }
                return result;
        },
        getMessageById: async (_id: string | object): Promise<IMessages> => {            
                const result = await Messages.findById(_id);
                if(!result) { throw signale.fatal(new Error("No se encontro el mensaje")); }
                return result;
        }  
    };
};

export default MessageAdapter