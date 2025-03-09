import {signIn} from "@/auth";
import {LoginForm} from "@/components/app-components/Forms/LoginForm";

export default function Home() {
  return (
      <>
        <main className="container">
          <section >
                <LoginForm />
          </section>
        </main>
      </>
  );
}
