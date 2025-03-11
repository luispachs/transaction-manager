import {
    Table,
    TableBody,
    TableCaption,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import {auth} from "@/lib/Security/auth";
import {redirect} from "next/navigation";
import {UserRepository} from "@/lib/Repository/UserRepository";

export default async function page({PageProps}:{PageProps:Promise<{ lang: string }>;}){
    const param  =await PageProps;
    const lang = param.lang ?? "es";
    const _auth = await auth();
    const user = _auth?.user;
    if(user==null){
        const url =new URL(`/${(lang)}`,process.env.BASE_URL);
        redirect(url.toString());
    }
    const userRepository = new UserRepository();
    const entity =await userRepository.findByEmail(user.email!);

    if(Number(entity?.roleId)==2){
        const url =new URL(`/${(lang)}/dashboard`,process.env.BASE_URL);
        redirect(url.toString());
    }
    return (
        <section className="min-h-full">

        </section>
    )
}