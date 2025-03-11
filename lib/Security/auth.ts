import NextAuth, {NextAuthConfig} from "next-auth"
import Github from "next-auth/providers/github";
import Auth0 from "next-auth/providers/auth0"
import Credentials from "next-auth/providers/credentials";
import {LoginFormSchema} from "@/lib/Schema/LoginFormSchema";
import {User} from "@/lib/Types";
import {UserRepository} from "@/lib/Repository/UserRepository";
import {Password} from "@/lib/Security/Password";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { PrismaClient } from "@prisma/client"
const prisma = new PrismaClient();
process.env.AUTH_SECRET="40pKHYDLuD/m7CP1eNVORtQGHdpWMRl6CtKvouOlnHo="; const handler = NextAuth({
    adapter: PrismaAdapter(prisma),
    session: {
        strategy: "jwt",
        updateAge: 7200,
        maxAge: 86400,
    },
    secret: process.env.AUTH_SECRET as string,
    providers: [
        Auth0,
        Github
        , Credentials(
            {
                credentials: {
                    email: {label: "Email", type: "text"},
                    password: {label: "Password", type: "password"}
                },
                authorize: async (credentials, request: Request): Promise<any> => {
                    let user: User | null = null;
                    try {
                        let {email, password} = await LoginFormSchema.parseAsync(credentials);
                        let userRepository = new UserRepository();
                        user = await userRepository.findByEmail(email);
                        if (user == null || !Password.validate(password, user.password)) {
                            return null
                        }

                    } catch (error: any) {

                        return null;
                    }
                    return user;
                }
            },
        )],
} satisfies NextAuthConfig)

export const auth = handler.auth;
export const get = handler.handlers["GET"]
export const post = handler.handlers["POST"]