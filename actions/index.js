"use server";

import * as auth from "@/utils/auth";

export const signInWithGithub = async () => {
  return auth.signIn("github");
};
export const signOut = async () => {
  return auth.signOut();
};
