import { NextResponse, NextRequest } from "next/server";
import { EnumTokens } from "./services/auth.service";

export async function middleware(request: NextRequest, responce: NextResponse) {
    debugger
    const {url, cookies} = request

    
    const refreshToken = cookies.get(EnumTokens.REFRESH_TOKEN)?.value
    const isAuthPage = url.includes('/login') || url.includes('/register')

    if (isAuthPage && refreshToken) {
        return NextResponse.redirect(new URL('/', url))
    }

    if (isAuthPage) {
        return NextResponse.next()
    }

    if (!refreshToken) {
        return NextResponse.redirect(new URL('/register', request.url))
    }

}

export const config = {
    matcher: ['/login', '/register', '/']
}