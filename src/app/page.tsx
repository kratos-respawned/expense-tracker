import { Icons } from "@/components/Icons";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Card,
  CardContent,
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
import { AddItem } from "@/components/AddItem";
import { SignedIn } from "@/components/SignedIn";

export default async function Home() {
  const session = await getServerSession(authOptions);
  if (!session) redirect("/login");
  const transactions = await db.expense.findMany({
    where: {
      userId: session.user.id,
    },
  });
  return (
    <main className=" pt-0 isolate">
      <section className="p-4 pb-0 fixed pt-4 inset-x-0 top-0 bg-background z-50  ">
        <div className="flex justify-between ">
          <div className="flex gap-4 items-center">
            <SignedIn>
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
            </SignedIn>
            <div>
              <p className="text-xs leading-none font-medium text-gray-400">
                Welcome!
              </p>
              <p className="text-sm font-semibold ">{session.user.name}</p>
            </div>
          </div>
          <ChangeTheme />
        </div>

        <div className=" rounded-lg gradient  mt-5 ">
          <Card className=" border-none text-white h-44 p-12 dottedGradient">
            <CardContent className="">
              <CardTitle className="text-center text-sm">
                Total Expense
              </CardTitle>
              <p className="text-3xl  font-bold text-center pt-0">
                {new Intl.NumberFormat("en-US", {
                  style: "currency",
                  currency: "INR",
                }).format(
                  transactions.reduce((acc, curr) => acc + curr.amount, 0)
                )}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="flex justify-between items-center mt-7 pb-5">
          <p className="font-bold text-base">Transactions</p>
          <Link href="/transactions" className="text-sm opacity-75">
            <p className="">View All</p>
          </Link>
        </div>
      </section>

      <div className=" space-y-2 px-4 pt-[330px] h-full   pb-16">
        {transactions.length === 0 ? (
          <p className="text-center text-sm text-gray-400">
            No transactions yet
          </p>
        ) : (
          transactions.map((transaction) => (
            <TransactionCard key={transaction.id} transaction={transaction} />
          ))
        )}
      </div>
      <AddItem />
    </main>
  );
}
