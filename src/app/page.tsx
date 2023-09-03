import { DropdownMenuDemo } from "@/components/CardDialog";
import { Icons } from "@/components/Icons";
import AddItem from "@/components/add-item";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Drawer } from "vaul";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { authOptions } from "@/lib/auth";
import { getServerSession } from "next-auth";
import Image from "next/image";
import { ChangeTheme } from "@/components/change-theme";
import Link from "next/link";

export default async function Home() {
  // const session = await getServerSession(authOptions);
  const session = {
    user: {
      name: "Sai",
      image: null,
    },
  };
  return (
    <main className="p-4">
      <div className="flex justify-between mb-5">
        <div className="flex gap-4 items-center">
          {session && session.user.image ? (
            <Avatar>
              <AvatarImage src={session.user.image} />
              <AvatarFallback className="uppercase border">
                {session.user.name.slice(0, 2)}
              </AvatarFallback>
            </Avatar>
          ) : (
            <Avatar>
              <AvatarFallback className="border">
                <Icons.user />
              </AvatarFallback>
            </Avatar>
          )}
          <div>
            <p className="text-xs leading-none font-medium text-gray-400">
              Welcome!
            </p>
            <p className="text-sm font-semibold ">
              {session.user.name}
            </p>
          </div>
        </div>
        <ChangeTheme/>
      </div>
      <div className=" rounded-lg gradient ">
        <Card className=" border-none text-white dottedGradient">
          <CardHeader className="pb-2">
            <CardTitle className="text-center text-sm">Total Balance</CardTitle>
          </CardHeader>
          <CardContent className="text-3xl font-bold text-center pt-0">
            <p>$ 4000.00</p>
          </CardContent>
          <CardFooter className="justify-between">
            <div className="flex items-center justify-between gap-x-3 text-sm">
              <span className="w-5 h-5 bg-white/50 grid place-items-center rounded-full">
                <Icons.upArrow className="w-4 h-4 " />
              </span>
              <div>
                <p className="text-sm">Income</p>
                <p className="font-semibold">{
                  (12334).toLocaleString ('en') 
                }</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-x-3 text-sm">
              <span className="w-5 h-5 bg-white/50 grid place-items-center rounded-full">
                <Icons.downArrow className="w-4 h-4 text-red-500 " />
              </span>
              <div>
                <p className="text-sm">Expenses</p>
                <p className="font-semibold">{new Intl.NumberFormat('en-US').format(800)}</p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>
      <div>
        <div className="flex justify-between items-center mt-7">
              <p className="font-bold text-base">Transactions</p>
              <Link href="/transactions" className="text-sm text-black/60">
              <p className="">View All</p>
              </Link>
        </div>
        <Card className="flex flex-col">
          <CardHeader>
                
              <CardTitle>Food</CardTitle>
          </CardHeader>
        </Card>
      </div>
    </main>
  );
}
