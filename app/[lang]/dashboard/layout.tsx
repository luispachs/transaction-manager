import {LoggedHeader} from "@/components/LoggedHeader"
import React from "react";

export default function layout({children}:{children:React.ReactNode}) {
    return (
        <section suppressHydrationWarning>
            <LoggedHeader />
            {children}
        </section>
    )
}