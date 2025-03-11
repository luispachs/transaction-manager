"use client";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Image from "next/image";
import Link from 'next/link'

export default function  card ({title,description,icon,url}: {title: string;description?:string; icon?: string;url:string}) {

    return (
            <Card className="min-h-[80vh] sm:min-h-[60vh] lg:min-h-[40vh] xl:min-h-[40vh] 2xl:min-h-[30vh] w-[80%] md:w-[50%] lg:w-[33%] xl:w-[33%] xl:w-[33%] relative">
                <CardHeader className="relative top-0 flex justify-end items-center h-[5vh] flex w-full">
                    <CardTitle>{title}</CardTitle>
                    {(icon!=null)?<Image src={icon} alt={`${title}-icon`}/>:""}
                </CardHeader>
               <CardContent className="h-[30vh] flex w-full"><CardDescription>{description}</CardDescription></CardContent>
                <CardFooter className="relative bottom-0 flex justify-end items-center w-full h-[5vh]">
                    <Link href={url} className="block h-[2-rem] rounded-md text-center text-textPrimary bg-bTertiary w-[6rem]">Ir</Link>
                </CardFooter>

            </Card>
    );
}