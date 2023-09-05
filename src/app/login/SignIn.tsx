"use client";
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useSearchParams } from "next/navigation";

import { useRef, useState } from "react";
type OAuthProviders = "github" | "google";
export function LoginContainer() {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const mailRef = useRef<HTMLInputElement>(null);
  const searchParams = useSearchParams();
  const { toast } = useToast();
  const OAuthLogin = async (provider: OAuthProviders) => {
    setIsLoading(true);
    try {
      await signIn(provider, {
        callbackUrl: "/",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  const EmailLogin = async () => {
    setIsLoading(true);
    try {
      if (!mailRef.current?.value) {
        toast({
          title: "Email is required",
          description: "Please enter your email",
        });
        return;
      }
      console.log(mailRef.current?.value);
      const signInResult = await signIn("email", {
        email: mailRef.current.value.toLowerCase(),
        redirect: false,
        callbackUrl: searchParams?.get("from") || "/",
      })
      toast({
        title: "Email sent",
        description: "Check your inbox for the login link",
      });
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Card className=" max-w-lg w-full">
      <CardHeader className="space-y-1">
        <CardTitle className="text-2xl">Login</CardTitle>
        <CardDescription>Enter your email below to login</CardDescription>
      </CardHeader>
      <CardContent className="grid gap-4">
        <div className="grid grid-cols-2 gap-6">
          <Button
            disabled={isLoading}
            onClick={() => OAuthLogin("github")}
            variant="outline"
          >
            <Icons.github className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button
            disabled={isLoading}
            onClick={() => OAuthLogin("google")}
            variant="outline"
          >
            <Icons.google className="mr-2 h-4 w-4" />
            Google
          </Button>
        </div>
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <span className="w-full border-t" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input
            required
            ref={mailRef}
            id="email"
            type="email"
            placeholder="m@example.com"
          />
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={EmailLogin} disabled={isLoading} className="w-full">
          Login
        </Button>
      </CardFooter>
    </Card>
  );
}
