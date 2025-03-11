import Card from "@/components/app-components/Card";
import {auth} from "@/lib/Security/auth";
import {redirect} from "next/navigation";
import {UserRepository} from "@/lib/Repository/UserRepository";

export default async function home({PageProps}:{PageProps:Promise<{ lang: string }>;}) {
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

    const ListCard = [
        {title:"Sistema de gestión de ingresos y egresos",icon:null,description:null,url:`/${lang}/dashboard/transactions` ,excludeRole: null},
        {title:"Gestión de Usuarios",icon:null,description:null,url:`/${lang}/dashboard/users`,excludeRole: 2},
        {title:"Reportes",icon:null,description:null,url:`/${lang}/dashboard/reports`,excludeRole: 2}
    ]

    const cards =  ListCard.map((card: any,index:number) => {
        if(Number(entity?.roleId) != card.excludeRole){
            return <Card key={index} title={card.title} description={card.description} icon={card.icon} url={card.url}/>;
        }
    });

    return (<section className="w-full px-[5rem] flex flex-col md:flex-col lg:flex-col xl:flex-col 2xl:flex-col">
            <section className="w-full">
                <h2>Dashboard</h2>
            </section>
            <section className="w-full flex flex-col md:flex-row lg:flex-row xl:flex-row 2xl:flex-row gap-5 justify-between items-center">
                {cards}
            </section>
        </section>);
}