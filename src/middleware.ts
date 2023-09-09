import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  console.log(request.nextUrl.pathname);
  const path = request.nextUrl.pathname;
  const isPublicPath = path === "/login" || path === "/signup" ;
  const token = request.cookies.get("token")?.value || "";
  if (isPublicPath && token) {
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !token) {
    return NextResponse.redirect(new URL("/user/login", request.nextUrl));
  }
  
}


export const config = {
  matcher: [ "/login", "/signup","/verifyemail","/user/startquiz"],
};
