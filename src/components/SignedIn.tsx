"use client";

import { env } from "@/env.mjs";
import { signOut } from "next-auth/react";

export const SignedIn = ({ children }: { children: React.ReactNode }) => {
  return (
    <button
      onClick={() => {
        signOut({ callbackUrl: env.NEXT_PUBLIC_HOMEPAGE_URL });
      }}
    >
      {children}
    </button>
  );
};
