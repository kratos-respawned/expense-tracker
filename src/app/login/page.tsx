import { getServerSession } from "next-auth/next";
import { LoginContainer } from "./SignIn";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";



const Login = async () => {
  const session = await getServerSession(authOptions);
  if(session){
   redirect("/"); 
  } 
  return (
    <main className=" min-h-screen grid place-items-center px-4">
      <LoginContainer/>
    </main>
  );
};

export default Login;
