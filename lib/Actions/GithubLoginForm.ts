"use server"
import {signIn} from "@/auth";

export default async function handleSubmition() {
    await signIn("github")
}