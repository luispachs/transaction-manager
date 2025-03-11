import { TransactionRepository} from "@/lib/Repository/TransactionRepository";

const transactionRepository = new TransactionRepository();
export async function GET (request:Request) {
    const users = await transactionRepository.getAll();
    return Response.json(users);
}