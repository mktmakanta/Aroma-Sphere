import { supabase } from "./supabase";

export const signUpUser = async (
  email: string,
  password: string,
  name: string
) => {
  const { data, error: authError } = await supabase.auth.signUp({
    email,
    password,
  });

  const user = data?.user;

  if (authError) {
    console.error("Authentication error:", authError.message);
    throw authError;
  }

  if (!user) {
    throw new Error("User not found in authentication response");
  }

  // Insert user data into your "users" table (without storing the password)
  const { data: dbData, error: dbError } = await supabase.from("users").insert([
    {
      id: user.id,
      email: user.email,
      name,
    },
  ]);

  if (dbError) {
    console.error("Database error:", dbError.message);
    throw dbError;
  }

  console.log("User data inserted into the database:", dbData);
  return { authData: dbData, user };
};
