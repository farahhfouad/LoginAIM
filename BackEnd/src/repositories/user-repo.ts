import { UserEntity } from '../entities/user';
import { getManager } from 'typeorm';


export class UserRepo {

    getAllUsers() {
        return getManager().getRepository(UserEntity).find();
    }

    getUser(name: string) {
        return getManager().getRepository(UserEntity).find({ where: { userName: name } }).catch((error) => {
            console.log(error);
        });
    }
    AddUser(user: UserEntity) {
        return getManager().getRepository(UserEntity).save(user);
    }
}