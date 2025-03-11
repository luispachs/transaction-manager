
import {LoginForm} from "@/components/app-components/Forms/LoginForm";
import {GeneralHeader} from "@/components/GeneralHeader";
import {redirect} from "next/navigation";
import {auth} from "@/lib/Security/auth";


export  default  async function Home({PageProps}:{PageProps:Promise<{ lang: string }>;}) {
    const prop =await PageProps;
    const _auth =  await auth();
    console.log(_auth);
    if(_auth?.user!=null){
        const url =new URL(`/${(prop?.lang??"es")}/dashboard`,process.env.BASE_URL);
        redirect(url.toString());
    }

  return (
      <>
          <GeneralHeader/>
          <main className="w-full h-[90vh]  px-4 flex items-center justify-center bg-[var(--background)]">
              <section className="w-96 md:w-72 lg:w-64 xl:w-56 2xl:w-44">
                    <LoginForm />
              </section>
          </main>
      </>
  );
}
