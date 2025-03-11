import {Repository, Role} from "@/lib/Types";
import {PrismaClient} from "@prisma/client";

export class RoleRepository implements Repository<Role>{
    #client: PrismaClient;
    constructor(){
        this.#client = new PrismaClient();
    }
    // @ts-ignore
    async create (model: Role){
        throw Error("Not implemented");

    };
    // @ts-ignore
    async update(id: number | string, model: object){
        throw Error("Not implemented");

    };
    async delete (id: number | string) {
        throw Error("Not implemented");
    };
    // @ts-ignore
    async find(id: number | string){
        throw  new Error("Not implemented");
    }
    async getAll(){
        return( await this.#client.roles.findMany({}))
    }

}