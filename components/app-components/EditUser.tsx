import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {Select, SelectContent, SelectItem, SelectTrigger, SelectValue} from "@/components/ui/select";
import {useEffect, useState} from "react";
export function EditUser({id}:{id:string}){
    const [roles, setRoles] = useState([])
    useEffect(()=>{
        fetch("/api/rol", {
            method: "GET",
        }).then(async response =>await response.json())
            .then(data =>{
                let rolesList = data.map((role:any,index:number)=>{
                    return <SelectItem value={role.id} key={index}>{`${role.name}`}</SelectItem>
                })
                console.log(rolesList)
                setRoles(rolesList)
            })
    },[])


    return (
        <Dialog>
            <DialogTrigger>Editar</DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className="w-full text-center">Transaction</DialogTitle>
                </DialogHeader>
                <form className="w-full flex flex-col items-center justify-center">
                    <article className="w-full flex flex-col items-center justify-center">
                        <Label className="w-full text-center">Nombre</Label>
                        <Input variant={"default"} btnSize={"default"} name={"text"} id={"name"}/>
                    </article>
                    <article className="w-full flex flex-col items-center justify-center">
                        <Label className="w-full text-center">Apellido</Label>
                        <Input variant={"default"} btnSize={"default"} name={"text"} id={"lastname"}/>
                    </article>
                    <article  className="w-full flex flex-col items-center justify-center">
                        <Label className="w-full text-center">Rol</Label>
                        <Select>
                            <SelectTrigger className="w-[180px]">
                                <SelectValue placeholder="Seleccione tipo de transacción" />
                            </SelectTrigger>
                            <SelectContent>
                                {roles}
                            </SelectContent>
                        </Select>
                    </article>
                    <Button>Crear</Button>

                </form>
            </DialogContent>
        </Dialog>
    );
}