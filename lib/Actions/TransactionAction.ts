"use server";
import {TransactionRepository} from "@/lib/Repository/TransactionRepository";

export async function CreateTransactionAction(prevState: any, formData: FormData){

    try{

        const repo = new TransactionRepository();
        let amount = Number(formData.get("amount")??"0");

        const entity = await repo.create({
            data:{
                amount,
                type: formData.get("type"),
                concept: formData.get("concept"),
                userId: formData.get("user"),
            }
        });
        return {error:200,message:"creación exitosa",entities:entity}
    }
    catch(error:any){
        return {error:500,message:error.message,entities:{}}
    }

}