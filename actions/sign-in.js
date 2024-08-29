import * as auth from "@/utils/auth";

export const signInWithGithub = async () => {
  return auth.signIn("github");
};
