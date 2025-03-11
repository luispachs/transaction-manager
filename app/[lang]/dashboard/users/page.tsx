"use client";
import {
    Table,
    TableBody,
    TableCaption,
    TableHead,
    TableCell,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {TableFallback} from "@/components/fallback/TableFallback"
import {Suspense, useState,useEffect} from "react";
import {EditUser} from "@/components/app-components/EditUser";

export default function page({PageProps}:{PageProps:Promise<{ lang: string }>;}){
    const [users,setUsers] = useState([])
    useEffect(() => {
        fetch("/api/user").then(
            async res=> await res.json())
            .then(data =>{

                    let userList =  data.map((user:any,index:number)=>{

                            return (<TableRow className="w-full bg-bPrimary min-h-min gap-[5px]" key={index} >
                                <TableCell className="bg-accentPrimary h-[2.5rem] rounded-lg size-4 " >{user.name}</TableCell>
                                <TableCell  className="bg-accentPrimary h-[2.5rem] rounded-lg size-4" >{user.lastname}</TableCell>
                                <TableCell  className="bg-accentPrimary h-[2.5rem] rounded-lg size-4" >{user.email}</TableCell>
                                <TableCell  className="bg-accentPrimary h-[2.5rem] rounded-lg size-4" >{user.phone}</TableCell>
                                <TableCell  className="bg-accentPrimary h-[2.5rem] rounded-lg size-4" >{user.role.name}</TableCell>
                                <TableCell  className="bg-accentPrimary h-[2.5rem] rounded-lg size-4" ><EditUser id={user.id}/></TableCell>
                        </TableRow>)
                    });
                    setUsers(userList);
                }
            )
    },[]);

    return (
        <section className="min-h-full flex flex-col items-center justify-center">
            <section className="w-[80%]">
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHead>Nombre</TableHead>
                            <TableHead>Apellido</TableHead>
                            <TableHead>Email</TableHead>
                            <TableHead>Telefono</TableHead>
                            <TableHead>Rol</TableHead>
                            <TableHead>Editar</TableHead>

                        </TableRow>
                    </TableHeader>
                    <Suspense fallback={<TableFallback />}>
                        <TableBody>
                            {users}
                        </TableBody>
                    </Suspense>
                </Table>
            </section>
        </section>
    )
}