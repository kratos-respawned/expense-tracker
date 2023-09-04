import { Icons } from "@/components/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
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
import { ChangeTheme } from "@/components/change-theme";
import Link from "next/link";
import TransactionCard from "@/components/TransactionCard";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if(!session) redirect("/login");
  const transactions= await db.expense.findMany({
    where:{
      userId:session.user.id
    }
  })
  return (
    <main className="p-4 pt-0 isolate">
      <section className="fixed pt-4 inset-x-4 top-0 bg-background z-50  ">
      <div className="flex justify-between ">
        <div className="flex gap-4 items-center">
          {session && session.user.image ? (
            <Avatar>
              <AvatarImage src={session.user.image} />
              <AvatarFallback className="uppercase border">
                {session.user.name?.slice(0, 2)}
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
            <p className="text-sm font-semibold ">{session.user.name}</p>
          </div>
        </div>
        <ChangeTheme />
      </div>
      
      <div className=" rounded-lg gradient pointer-events-none mt-5 ">
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
                <p className="font-semibold">{(12334).toLocaleString("en")}</p>
              </div>
            </div>
            <div className="flex items-center justify-between gap-x-3 text-sm">
              <span className="w-5 h-5 bg-white/50 grid place-items-center rounded-full">
                <Icons.downArrow className="w-4 h-4 text-red-500 " />
              </span>
              <div>
                <p className="text-sm">Expenses</p>
                <p className="font-semibold">
                  {
                    new Intl.NumberFormat("en-US", {
                      style: "currency",
                      currency: "INR",
                    }).format(transactions.reduce((acc,curr)=>acc+curr.amount,0))
                  }
                </p>
              </div>
            </div>
          </CardFooter>
        </Card>
      </div>



      <div className="flex justify-between items-center mt-7 pb-5">
          <p className="font-bold text-base">Transactions</p>
          <Link href="/transactions" className="text-sm opacity-75">
            <p className="">View All</p>
          </Link>
        </div>
      
      
      </section>
        
        <div className=" space-y-2 mt-80 pt-2 pb-12">
          {
            transactions.length===0 ? <p className="text-center text-sm text-gray-400">No transactions yet</p>:
            transactions.map((transaction)=>(
              <TransactionCard key={transaction.id} transaction={transaction} />
            ))
          }
        </div>
      
    </main>
  );
}
