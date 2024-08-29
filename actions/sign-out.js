"use server";

import * as auth from "@/utils/auth";

const signOut = async () => {
  return auth.signOut();
};

export default signOut;
