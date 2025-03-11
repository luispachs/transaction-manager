import {ThemeSwitch} from "@/components/app-components/ThemeSwitch";
import {LogoutForm} from "@/components/app-components/Forms/LogoutForm";

export function LoggedHeader() {
    return (
        <div className="w-full flex items-center justify-end bg-[var(--background)]  p-[5px]">
           <section className="w-[20%] flex flex-row items-center justify-between bg-[var(--background)]  p-[5px]">
               <LogoutForm />
               <ThemeSwitch />
           </section>
        </div>
    );
}