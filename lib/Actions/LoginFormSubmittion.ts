'use server';
import {signIn} from "@/auth";
import {headers} from "next/headers";


export default async function handleSubmit(prevState: any, formData: FormData) {
    await signIn("credentials",formData);

}