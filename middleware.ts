import {NextRequest,NextResponse} from "next/server";
//export { auth as middleware } from "@/auth"

export  function middleware(request:NextRequest){
    const reqClone = request.clone()
    const path = request.nextUrl.pathname
    if(path.startsWith("/es")||path.startsWith("/en")){
        return NextResponse.next(reqClone);
    }
    return NextResponse.redirect(new URL("/es",process.env.BASE_URL),302);
}


export const config = {

    matcher:[
        '/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)'
    ]
}