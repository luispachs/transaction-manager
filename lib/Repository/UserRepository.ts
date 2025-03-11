import {Repository,User,Model} from "@/lib/Types";
import {client} from "@/lib/Database/PrismaClient";
import {Prisma, PrismaClient} from "@prisma/client";

export class UserRepository implements Repository<User>{
    #client: PrismaClient;
    constructor(){
        this.#client = new PrismaClient();
    }
    async create(user: User): Promise<User> {
        return (await this.#client.User.create({data:user as Prisma.usersUncheckedCreateInput}));
    }

     delete(id: number|string): Prisma.Prisma__usersClient<object> {
         return this.#client.User.delete({
            where:{
                id:id as string
            }
        });
    }

    async find(id: number|string): Promise<User|null> {

        return  (await this.#client.User.findFirst({
            where:{id:id as string}
        }));
    }
    async graphById(id: number|string): Promise<User|null> {

        return  (await this.#client.User.findFirst({
            where:{id:id as string},
            include:{
                transactionList:true,
                role:true
            }
        }));
    }
    async graphByEmail(email: string): Promise<User|null> {

        return  (await this.#client.User.findFirst({
            where:{email:email as string},
            include:{
                transactionList:true,
                role:true
            }
        }));
    }

    async update(id:string|number,model: any): Promise<User> {

        return (await this.#client.User.update({
            where: {
                id:id as string
            },
            data: model
        }));
    }

    async findByEmail(email: string): Promise<User|null> {
        return (await this.#client.User.findFirst({
            where:{email}
        }));
    }

    async getAll(): Promise<any[]> {
        return (await this.#client.User.findMany({include:{
            role:true
            }}));
    }

    async graphAll(){
        return  (await this.#client.User.findMany(
                {include:{
                    role:true,transactionList:true
                }
            }
        ));
    }

}