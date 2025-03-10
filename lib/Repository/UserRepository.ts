import {Repository,User,Model} from "@/lib/Types";
import {client} from "@/lib/Database/PrismaClient";
import {Prisma, PrismaClient} from "@prisma/client";

export class UserRepository implements Repository<User>{
    #client: PrismaClient;
    constructor(){
        this.#client = new PrismaClient();
    }
    async create(user: User): Promise<User> {
        return (await this.#client.users.create({data:user as Prisma.usersUncheckedCreateInput}));
    }

     delete(id: number|string): Prisma.Prisma__usersClient<object> {
         return this.#client.users.delete({
            where:{
                id:id
            }
        });
    }

    async find(id: number|string): Promise<User|null> {

        return  (await this.#client.users.findFirst({
            where:{id:id}
        }));
    }

    async update(id:string|number,model: any): Promise<User> {

        return (await this.#client.users.update({
            where: {
                id:id
            },
            data: model
        }));
    }

    async findByEmail(email: string): Promise<User|null> {
        return (await this.#client.users.findFirst({
            where:{email}
        }));
    }

}