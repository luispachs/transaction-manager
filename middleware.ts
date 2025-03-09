import {NextRequest,NextResponse} from "next/server";
//export { auth as middleware } from "@/auth"

export  function middleware(request:NextRequest){
    const reqClone = request.clone()
    const path = request.nextUrl.pathname
    if(path.startsWith("/es")||path.startsWith("/es")){
        return NextResponse.next(reqClone);
    }
    return NextResponse.redirect(new URL("/es",process.env.BASE_URL),302);
}


export const config = {

    exclude: ['/api','/((?!_next).*)']
}