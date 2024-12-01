import { supabase } from "./supabase";

export const signOutUser = async () => {
  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Sign out error:", error.message);
    throw error;
  }

  console.log("User signed out successfully");
};
