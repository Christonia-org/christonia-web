import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/utils/supabase/middleware";

export async function middleware(request: NextRequest) {
  // This runs on every request to keep the Supabase session alive
  return await updateSession(request);
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to add other paths you want to ignore (e.g. public images)
     */
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
