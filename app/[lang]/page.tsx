import {signIn} from "@/auth";
import {LoginForm} from "@/components/app-components/Forms/LoginForm";
import {ThemeSwitch} from "@/components/app-components/ThemeSwitch";


export default function Home() {
  return (
      <>
          <div className="w-full min-px-4 h-[10vh] flex items-center justify-end bg-[var(--background)]"><ThemeSwitch/></div>
          <main className="w-full h-[90vh]  px-4 flex items-center justify-center bg-[var(--background)]">
              <section className="w-96 md:w-72 lg:w-64 xl:w-56 2xl:w-44">
                    <LoginForm />
              </section>
          </main>
      </>
  );
}
