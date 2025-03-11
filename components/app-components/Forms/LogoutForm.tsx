"use client"
import {Button} from "@/components/ui/button";
import {signOut} from "next-auth/react";
export function LogoutForm() {
    return (
        <form action={()=>{
            signOut({redirectTo:"/es"})
        }}>
            <Button type={"submit"} variant={"default"} color="primary" className={"h-[2rem] min-w-min rounded-md"}>Cerrar Sesión</Button>
        </form>
    )
}