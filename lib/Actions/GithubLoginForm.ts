"use server"
import {signIn} from "@/auth";

export default async function handleSubmittion() {
    await signIn("github")
}