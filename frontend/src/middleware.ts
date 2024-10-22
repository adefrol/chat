import { NextRequest, NextResponse } from "next/server";
import { getToken } from './serivces/token.service'

export const middleware = async (req: NextRequest) => {
    const token = await getToken();

    if (!token && req.nextUrl.pathname.includes("/")) {
        return NextResponse.redirect(new URL("/sign-in", req.url));
    }

    return NextResponse.next();
};

export const config = {
    matcher: ["/((?!sign-up|sign-in|api|_next/static|_next/image|favicon.ico).*)"],
};