"use client";
import {Suspense, useEffect, useState} from "react";
import {Table, TableBody, TableCell, TableHead, TableHeader, TableRow} from "@/components/ui/table";
import {EditTransaction} from "@/components/app-components/EditTransaction";
import {CreateTransaction} from "@/components/app-components/CreateTransaction";
import {TableFallback} from "@/components/fallback/TableFallback";

export function TransactionTable(){
    let [transaction,setTransaction] = useState([])
    useEffect(() => {
        fetch("/api/transaction").then(
            async res=> await res.json())
            .then(data =>{
                    let transactionList =  data.map((transaction:any,index:number)=>{
                        return <TableRow className="w-full bg-bPrimary min-h-min" key={index}>
                            <TableCell className="bg-accentSecondary  h-[2.5rem] rounded-lg size-5" >{transaction.date}</TableCell>
                            <TableCell  className="bg-accentSecondary h-[2.5rem] rounded-lg size-5" >{transaction.amount}</TableCell>
                            <TableCell  className="bg-accentSecondary h-[2.5rem] rounded-lg size-5" >{transaction.concept}</TableCell>
                            <TableCell  className="bg-accentSecondary h-[2.5rem] rounded-lg size-5" >{transaction.type}</TableCell>
                            <TableCell  className="bg-accentSecondary h-[2.5rem] rounded-lg size-5" >{transaction.user.name +" "+ transaction.user.lastname}</TableCell>
                            <TableCell  className="bg-accentSecondary h-[2.5rem] rounded-lg size-5" ><EditTransaction/></TableCell>
                        </TableRow>
                    });

                    setTransaction(transactionList);
                }
            )
    }, []);


    return (
        <>
            <section className="min-h-full w-full flex flex-col items-end justify-center pr-8">
                <CreateTransaction />
            </section>
            <section className="w-[80%]">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Fecha</TableHead>
                            <TableHead>Cantidad</TableHead>
                            <TableHead>Concepto</TableHead>
                            <TableHead>Tipo</TableHead>
                            <TableHead>Usuario</TableHead>
                            <TableHead>Editar</TableHead>
                        </TableRow>
                    </TableHeader>
                    <Suspense fallback={<TableFallback />}>
                        <TableBody>
                            {transaction}
                        </TableBody>
                    </Suspense>
                </Table>
            </section>
        </>
    )
}