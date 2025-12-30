import { NextResponse } from "next/server";
// The client you created earlier in src/lib/utils/supabase/server.ts
import { createClient } from "@/lib/utils/supabase/server";

export async function GET(request: Request) {
  const { searchParams, origin } = new URL(request.url);
  const code = searchParams.get("code");
  // if "next" is in param, use it as the redirect URL (defaults to home page)
  const next = searchParams.get("next") ?? "/";

  if (code) {
    const supabase = await createClient();

    // This part exchanges the temporary code for a permanent session
    const { error } = await supabase.auth.exchangeCodeForSession(code);

    if (!error) {
      // If successful, send the user to the destination page
      return NextResponse.redirect(`${origin}${next}`);
    }
  }

  // If something goes wrong, send them to an error page
  return NextResponse.redirect(`${origin}/auth/auth-code-error`);
}
