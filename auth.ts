import NextAuth from "next-auth"
import Github from "next-auth/providers/github";
import Credentials from "next-auth/providers/credentials";
import {LoginFormSchema} from "@/lib/Schema/LoginFormSchema";
import {User} from "@/lib/Types";
import {UserRepository} from "@/lib/Repository/UserRepository";
import {Password} from "@/lib/Security/Password";
import { PrismaAdapter } from "@auth/prisma-adapter";
import {client} from "@/lib/Database/PrismaClient";
import {User as authUser} from "@auth/core/types"
import {headers} from "next/headers";

export const { handlers, signIn, signOut, auth } = NextAuth({
    adapter: PrismaAdapter(client),
    providers: [Github,Credentials(
        {
            credentials:{
                email:{},
                password:{}
            },
            authorize: async (credentials,request:Request   )=>{
                let errorMessage = "Email and/or password are wrong. Please try again";
                let user:User|null = null;

                try{
                    let {email,password}=await  LoginFormSchema.parseAsync(credentials);
                    let userRepository = new UserRepository();
                    user =await userRepository.findByEmail(email);
                    if(user == null || !Password.validate(password,user.password)){
                        throw  new Error(errorMessage)
                    }

                }catch (error:any){

                    return null
                }
                return user as authUser;
            }
        },

    )],
    callbacks: {
        async redirect({ url, baseUrl }) {
            let headerList = await  headers();
            let referer =headerList.get("referer");
            let lang = "es";
            if(process.env.BASE_URL==null){
                console.log("BASE_URL: ", process.env.BASE_URL, " is undefined");
                throw new Error("Internal error 500");
            }
            if (referer){
                lang = referer.replace(process.env.BASE_URL+"/", "").substring(0,2);
            }

            return process.env.BASE_URL+`/${lang}/dashboard`; // Redirige siempre a /dashboard después de iniciar sesión
        }
    }
})