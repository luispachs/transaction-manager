"use client";
import { Button } from "@/components/ui/button";
import {Input} from '@/components/ui/input';
import {useActionState} from "react";
import { FormSubmitionInitialStateWithStatus} from "@/lib/Types";
import FormSubmittion from "@/lib/Actions/LoginFormSubmittion";
import GitHubLogin from "@/lib/Actions/GithubLoginForm";
import {Label} from "@/components/ui/label";
import Image from 'next/image';
import LogoGitHub from "@/public/github-100x100.png";




const LoginFormInitialState:FormSubmitionInitialStateWithStatus= {message:"",status:0};
export function LoginForm() {
    // @ts-ignore
    const [state, formAction, pending] = useActionState(FormSubmittion,LoginFormInitialState)
    return (
        <>
            <form action={formAction}  className="w-96 sm:w-96 lg:w-52 xl:w-44 2xl:w-40 h-4/5 md:h-3/5 lg:h-1/5 flex flex-col justify-center items-center">
                <section className="w-full flex flex-col justify-center items-center">
                    <Label className="block text-center text-black dark:text-textPrimarys">Email:</Label>
                    <Input type="email" id={"email"} name="email" required  variant={"default"} btnSize={"default"}/>
                </section>
                <section className="w-full flex flex-col justify-center items-center">
                    <Label className="block text-center w-full text-black dark:text-textPrimary">Password:</Label>
                    <Input type="Password" id={"Password"} name="password"  variant={"default"} btnSize={"default"} required/>
                </section>
                <section className="w-full flex justify-center items-center">
                    <Button type="submit">Login</Button>
                </section>
            </form>
            <section className="w-full h-max flex flex-col items-center justify-center">
                <article className="w-full">
                    <form action={GitHubLogin} className="w-full flex  justify-center items-center">
                        <button type="submit" className="w-full flex flex-row justify-center items-center">
                            <Image src={LogoGitHub.src} alt={"Github Logo"} width={80} height={80} />
                        </button>
                    </form>
                </article>
            </section>
        </>
    )
}