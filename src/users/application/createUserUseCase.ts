import UserRepository from "../domain/userRepository";
import { NotificacionNewUserUseCase } from "./services/NotificationNewUser";
import { IEncrypterService } from "./services/IEncrypterService";
import { User } from "../domain/user"

export class CreateUserUseCase {
   constructor(
      readonly userRepository: UserRepository,
      readonly encrypterService: IEncrypterService,
      readonly notificationNewUser: NotificacionNewUserUseCase
   ){}

   async run(
      name: string,
      lastName: string,
      badgeNumber: string,
      password: string,
      role: string
   ): Promise<User | null> {
      try{
         const user = new User(
            name,
            lastName,
            badgeNumber,
            this.encrypterService.hashPassword(password),
            role
         );
         if(user)
            this.notificationNewUser.run(user)
         return user
      } catch (error){
         return null
      }
   }
}