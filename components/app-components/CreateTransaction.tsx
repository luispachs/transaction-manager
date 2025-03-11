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
import {FormEvent,  useEffect, useRef, useState} from "react";

export function CreateTransaction(){
    const [users, setUsers] = useState<React.ReactNode[]>([])
    let [sta,setStatus] = useState(0);
    let [amount,setAmount] = useState(0);
    let [type,setType] = useState("");
    let [concepts,setConcepts] = useState("");
    let [user,setUser] = useState("");


    useEffect(()=>{
        fetch("/api/user", {
            method: "GET",
        }).then(async response =>await response.json())
            .then(data =>{
                console.log(data)
                let arr =data as Array<object>
                // @ts-ignore
                setUsers(arr)
            })
    },[sta])

    function create(ev:FormEvent<HTMLFormElement>){
        ev.preventDefault();

        fetch("/api/transaction/create", {
            method: "POST",
            body: JSON.stringify({amount:amount,type:type,userId:user,concept:concepts,})
        }).then(async response =>await response.json()).then((data:any[]) =>{


            let usersList = data.transactions.map((user:any,index:number)=>{
                return (<SelectItem value={user.id} key={index}>{`${user.name} ${user.lastname}`}</SelectItem>)
            })
            setUsers(usersList)

        }).catch(error=>{
            console.log(error)
        })
    }

    return (
        <Dialog>
            <DialogTrigger>Crear</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="w-full text-center">Nueva Transaction</DialogTitle>
                </DialogHeader>
                <form className="w-full flex flex-col items-center justify-center gap-8"  onSubmit={create}>
                <article className="w-full flex flex-col items-center justify-center">
                    <Label className="w-full text-center">Cantidad</Label>
                    <Input variant={"default"} btnSize={"default"} name={"number"} id={"amount"}  onChangeCapture={(e:FormEvent<HTMLInputElement>)=>{setAmount(parseInt(e.currentTarget.value))}}/>
                </article>
                <article className="w-full flex flex-col items-center justify-center">
                    <Label className="w-full text-center">Concepto</Label>
                    <Input variant={"default"} btnSize={"default"} name={"text"} id={"concept"} onChangeCapture={(e:FormEvent<HTMLInputElement>)=>{setConcepts(e.currentTarget.value)}}/>
                </article>
                <article className="w-full flex flex-col items-center justify-center">
                    <Label className="w-full text-center">Tipo</Label>
                    <Select name="type" onValueChange={(e)=>{setType(e)}} >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Seleccione tipo de transacción"  />
                        </SelectTrigger>
                        <SelectContent >
                            <SelectItem value="EGRESS">Egreso</SelectItem>
                            <SelectItem value="INCOME">Ingreso</SelectItem>
                        </SelectContent>
                    </Select>
                </article>
                <article className="w-full flex flex-col items-center justify-center">
                    <Label className="w-full text-center">Tipo</Label>
                    <Select name="user" onValueChange={(e)=>{setUser(e)}}>
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Seleccione un usuario"    />
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