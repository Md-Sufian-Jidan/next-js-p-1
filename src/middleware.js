import { cookies } from "next/headers";
import { NextResponse } from "next/server"

const user = true;
const co = 'next-superHero';

export const middleware = (request) => {
    let token = request.cookies.get('token');
    console.log('9', token);
    if (!token) {
        return NextResponse.redirect(new URL('/login', request?.url));
    } else if (token || token?.value !== co) {
        console.log(cookies);
        console.log(co);
        return NextResponse.redirect(new URL('/login', request?.url));
    }
    return NextResponse.next();
};

export const config = {
    matcher: ['/dashboard', '/services']
};