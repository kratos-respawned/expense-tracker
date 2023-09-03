import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";

export const SignedIn = async ({ children }: { children: React.ReactNode }) => {
  const session = await getServerSession(authOptions);
  return <>{session && children}</>;
};
