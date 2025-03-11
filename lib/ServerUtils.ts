"use server";
import {headers} from "next/headers";

export async function getCurrentLang(): Promise<string> {
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

    return lang;
}