import {Repository, Model, Transaction, User} from "@/lib/Types";

import {Prisma, PrismaClient} from "@prisma/client";

export class TransactionRepository implements Repository<Transaction>{
    #client: PrismaClient;
    constructor(){
        this.#client = new PrismaClient();
    }
    async create( transaction: Transaction): Promise<any> {
        return (await this.#client.transactions.create({data:transaction as any}));
    }

    delete(id: number|string): any {
        return this.#client.transactions.delete({
            where:{
                id:id as number
            }
        });
    }

    async find(id: number|string): Promise<any> {

        return  (await this.#client.transactions.findFirst({
            where:{id:id as number}
        }));
    }

    async update(id:string|number,model: any): Promise<any> {

        return (await this.#client.transactions.update({
            where: {
                id:id as number
            },
            data: model
        }));
    }

    async getAll(): Promise<any[]> {
        return (await this.#client.transactions.findMany({include:{
                user:true
            }}));
    }
    async graphAll(){
        return  (await this.#client.transactions.findMany(
            {include:{
                    user:true
                }
            }
        ));
    }

    async graphById(id: number|string): Promise<any> {
        return  (await this.#client.transactions.findFirst({
            where:{id:id as number},
            include:{
                user:true
            }
        }));
    }

}