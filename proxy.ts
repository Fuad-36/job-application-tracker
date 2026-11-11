import { NextRequest, NextResponse } from "next/server";
import { getSession } from "./lib/auth/auth";

const publicRoutes = ["/sign-in", "/sign-up"];

export default async function proxy(request: NextRequest) {
    const currentPath = request.nextUrl.pathname;
    const isPublicRoute = publicRoutes.includes(currentPath);

    // Allow Better Auth API endpoints
    if (currentPath.startsWith("/api/auth")) {
        return NextResponse.next();
    }

    const session = await getSession();

    // Authenticated users should not access auth pages
    if (isPublicRoute && session?.user) {
        return NextResponse.redirect(
            new URL("/dashboard", request.url)
        );
    }

    // Unauthenticated users cannot access protected pages
    if (!isPublicRoute && !session?.user) {
        return NextResponse.redirect(
            new URL("/sign-in", request.url)
        );
    }

    return NextResponse.next();
}

export const config = {
    matcher: [
        "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|css|js|woff2)$).*)",
    ],
};