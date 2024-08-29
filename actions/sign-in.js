"use server";

import * as auth from "@/utils/auth";

const signInWithGithub = async () => {
  return auth.signIn("github");
};

export default signInWithGithub;
