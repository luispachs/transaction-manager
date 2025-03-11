import {TransactionRepository} from "@/lib/Repository/TransactionRepository";
const transactionRepository = new TransactionRepository();
export async function POST(request:Request, response:Response) {
    let data = await request.json();
    let entity = await  transactionRepository.create(data);

    return  Response.json({transactions:entity});
}