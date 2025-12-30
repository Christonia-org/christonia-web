import { createClient } from "@/lib/utils/supabase/server";
import SignedOutHeader from "./SignedOutHeader";
import SignedInHeader from "./SignedInHeader";

export default function Header() {
  return <HeaderDataFetcher />;
}

async function HeaderDataFetcher() {
  const supabase = await createClient();

  // 1. Get the auth user
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return <SignedOutHeader />;
  }

  // 2. Fetch the profile picture from your PROFILES table
  const { data: profile } = await supabase
    .from("PROFILES")
    .select("profile_picture_url")
    .eq("id", user.id)
    .single();

  return <SignedInHeader userProfilePicUrl={profile?.profile_picture_url} />;
}
