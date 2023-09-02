"use client"
import { Icons } from "@/components/Icons";
import { Button } from "@/components/ui/button";
import { sendWelcomeEmail } from "@/lib/link-generator";

const Login = ({}) => {
  return <main className=" min-h-screen grid place-items-center">
    <Button onClick={sendWelcomeEmail} className="gap-1 tracking-wider"> <Icons.github/> Login</Button>
  </main>
}

export default Login;