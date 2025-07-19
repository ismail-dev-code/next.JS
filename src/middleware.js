import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("nextjs-token")?.value;


  const dummyUserData = {
    role: "admin", 
    email: "admin@gmail.com",
  };

  const isServicesPage = request.nextUrl.pathname.startsWith("/services");
  const isAdmin = dummyUserData.role === "admin";

  if (isServicesPage && !isAdmin) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next(); 
}


export const config = {
  matcher: ["/services/:path*"],
};
