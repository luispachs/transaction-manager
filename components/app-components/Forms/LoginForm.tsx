"use client";
import { Button } from "@/components/ui/button";
import {Input} from '@/components/ui/input';
import {useActionState} from "react";
import { FormSubmitionInitialStateWithStatus} from "@/lib/Types";
import FormSubmition from "@/lib/Actions/LoginFormSubmition";
import GitHubLogin from "@/lib/Actions/GithubLoginForm";
import Image from 'next/image';




const LoginFormInitialState:FormSubmitionInitialStateWithStatus= {message:"",status:0};
export function LoginForm() {

    // @ts-ignore
    const [state, formAction, pending] = useActionState(FormSubmition,LoginFormInitialState)
    return (
        <>
            <form action={formAction}  className="w-96 sm:w-96 lg:w-52 xl:w-44 2xl:w-40">
                <section>
                    <label>Email:</label>
                    <Input type="email" id={"email"} name="email" required />
                </section>
                <section>
                    <label>Password:</label>
                    <Input type="Password" id={"Password"} name="password" required />
                </section>
                <section>
                    <Button type="submit">Login</Button>
                </section>
            </form>
            <section>
                <article>
                    <form action={GitHubLogin}>
                        <button type="submit">
                            <Image src={"/github-100x100.png"} alt={"Github Logo"} width={100} height={100} />
                        </button>
                    </form>
                </article>
            </section>
        </>
    )
}