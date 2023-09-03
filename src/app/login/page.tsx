"use client";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { sendWelcomeEmail } from "@/lib/link-generator";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";
import { userAuthSchema } from "@/zod/AuthSchema";
import { z } from "zod";
import { useRef, useState } from "react";
type FormData = z.infer<typeof userAuthSchema>;
const Login = () => {
  const searchParams = useSearchParams();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const mailRef = useRef<HTMLInputElement>(null);
  async function onSubmit(e:React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    setIsLoading(true);
    // console.log(searchParams?.get("from"));
    const signInResult = await signIn("email", {
      email: mailRef.current?.value.toLowerCase(),
      redirect: false,
      callbackUrl: searchParams?.get("from") || "/",
    });
    setIsLoading(false);
  }

  return (
    <main className=" min-h-screen grid place-items-center">
      <form onSubmit={(e)=>{
        e.preventDefault();
      }}>
        <Input
        ref={mailRef}
          id="email"
          placeholder="name@example.com"
          type="email"
          autoCapitalize="none"
          autoComplete="email"
          autoCorrect="off"
          disabled={isLoading}
        />
        <Button onClick={onSubmit} disabled={isLoading}>
          {isLoading && <Icons.loader className="mr-2 h-4 w-4 animate-spin" />}
          Sign In with Email
        </Button>
      </form>
    </main>
  );
};

export default Login;
