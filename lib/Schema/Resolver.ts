
import {UserRepository} from "@/lib/Repository/UserRepository";
import {TransactionRepository} from "@/lib/Repository/TransactionRepository";


const userRepository = new UserRepository();
const transactionRepository = new TransactionRepository();
export const Resolver = {
    Query: {
        users: async () => {
            return await userRepository.graphAll()
        },
        transactions: async () => {
            return await transactionRepository.graphAll();
        },
        user:async (_:any,{id}:{id:string}) => {
            return await  userRepository.graphById(id)
        },
        transaction:async (_:any,{id}:{id:number}) => {
            return await  transactionRepository.graphById(id)
        }
    },
    Mutation: {
        createUser: async (_:any,{data}:{data: any}) => {
            return await userRepository.graphById(data);
        },
        createTransaction: async (_:any,{data}:{data: any}) => {
            return await transactionRepository.create(data);
        },
        updateUser: async (_:any,{data}:{data: any}) => {
            return await userRepository.update(data.id, data);
        },
        updateTransaction: async (_:any,{data}:{data: any}) => {
            return await transactionRepository.update(data.id, data);
        }


    }

}