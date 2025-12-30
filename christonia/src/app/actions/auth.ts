"use server";

import { createClient } from "@/lib/utils/supabase/server";
import { revalidatePath } from "next/cache";

// 1. Add prevState as the first argument
export async function signUpAction(prevState: any, formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const passwordConfirmation = formData.get("passwordConfirmation") as string;
  const username = formData.get("username") as string;

  if (password !== passwordConfirmation) {
    return { error: "Passwords do not match" };
  }

  const { error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: {
        username: username, // Change 'display_name' to 'username'
      },
      emailRedirectTo: `${process.env.NEXT_PUBLIC_SITE_URL}/auth/callback`,
    },
  });

  if (error) return { error: error.message };

  return { success: "Confirmation email sent! Please check your inbox." };
}

// 2. Do the same for signInAction if you're using it with useActionState
export async function signInAction(prevState: any, formData: FormData) {
  const supabase = await createClient();

  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  const { error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  if (error) return { error: error.message };

  // Note: redirect() shouldn't be inside a try/catch if you had one,
  // and it works fine within Server Actions.
}
