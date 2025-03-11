"use client";
import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,

    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import {Label} from "@/components/ui/label";
import {Input} from "@/components/ui/input";
import {Select,SelectContent,SelectTrigger,SelectValue} from "@/components/ui/select";
import {
    SelectItem,
} from "@/components/ui/select"
import {useActionState, useEffect, useState} from "react";
import {CreateTransactionAction} from "@/lib/Actions/TransactionAction";
export function CreateTransaction(){
    const [users, setUsers] = useState([])

    useEffect(()=>{
        fetch("/api/user", {
            method: "GET",
        }).then(async response =>await response.json())
            .then(data =>{

               let userList = data.map((user:any,index:number)=>{
                    return <SelectItem value={user.id}>{`${user.name} ${user.lastname}`}</SelectItem>
                })
                setUsers(userList)
            })
    })


    const initialState = {status:0,message:"",entities:{}};
    const [state, formAction, pending] = useActionState<any,any>(CreateTransactionAction, initialState)

    return (
        <Dialog>
            <DialogTrigger>Crear</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="w-full text-center">Nueva Transaction</DialogTitle>
                </DialogHeader>
                <form className="w-full flex flex-col items-center justify-center">
                <article className="w-full flex flex-col items-center justify-center">
                    <Label className="w-full text-center">Cantidad</Label>
                    <Input variant={"default"} btnSize={"default"} name={"number"} id={"amount"}/>
                </article>
                <article className="w-full flex flex-col items-center justify-center">
                    <Label className="w-full text-center">Concepto</Label>
                    <Input variant={"default"} btnSize={"default"} name={"text"} id={"concept"}/>
                </article>
                <article className="w-full flex flex-col items-center justify-center">
                    <Label className="w-full text-center">Tipo</Label>
                    <Select name="type">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Seleccione tipo de transacción" />
                        </SelectTrigger>
                        <SelectContent >
                            <SelectItem value="EGRESS">Egreso</SelectItem>
                            <SelectItem value="INCOME">Ingreso</SelectItem>
                        </SelectContent>
                    </Select>
                </article>
                <article className="w-full flex flex-col items-center justify-center">
                    <Label className="w-full text-center">Tipo</Label>
                    <Select name="user">
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Seleccione tipo de transacción" />
                        </SelectTrigger>
                        <SelectContent>
                            {users}
                        </SelectContent>
                    </Select>
                </article>

                <Button>Crear</Button>
                    </form>
            </DialogContent>
        </Dialog>
    );
}