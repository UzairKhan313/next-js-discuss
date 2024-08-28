"use client";
import { NextUIProvider } from "@nextui-org/react";
import { SessionProvider } from "next-auth/react";

const UIProvider = ({ children }) => {
  return (
    <SessionProvider>
      <NextUIProvider>{children}</NextUIProvider>;
    </SessionProvider>
  );
};

export default UIProvider;
