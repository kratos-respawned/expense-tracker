import { FC } from "react";
import { Card, CardHeader } from "./ui/card";
import { Icons } from "./Icons";
import { Prisma } from "@prisma/client";

interface TransactionCardProps {
  transaction: Prisma.ExpenseUncheckedCreateInput;
}

const TransactionCard: FC<TransactionCardProps> = ({ transaction }) => {
  return (
    <Card className="flex flex-row rounded-md">
      <CardHeader className="p-3 py-2 flex-row flex-1 items-center space-y-0 justify-between">
        <div className="flex gap-x-2 items-center text-sm">
          {transaction.category === "FOOD" ? (
            <FoodCard />
          ) : transaction.category === "TRAVEL" ? (
            <TravelCard />
          ) : transaction.category === "ENTERTAINMENT" ? (
            <EntertainmentCard />
          ) : (
            <ShoppingCard />
          )}
          <p>{transaction.name}</p>
        </div>
        <div className="text-right">
          <p className="text-sm">{
            new Intl.NumberFormat("en-US", {
                style: "currency",
                currency: "INR",
                }).format(transaction.amount)
          }</p>
          <p className="text-xs opacity-50">Today</p>
        </div>
      </CardHeader>
    </Card>
  );
};

export default TransactionCard;
const FoodCard = () => {
  return (
    <span className="rounded-full grid place-items-center w-10 h-10 text-white font-bold bg-gradient-to-t from-orange-500  to-orange-300">
      <Icons.food className="w-6 h-6  " />
    </span>
  );
};
const TravelCard = () => {
  return (
    <span className="rounded-full grid place-items-center w-10 h-10 text-white font-bold bg-gradient-to-tr from-emerald-600  to-emerald-300">
      <Icons.travel className="w-6 h-6  " />
    </span>
  );
};
const EntertainmentCard = () => {
  return (
    <span className="rounded-full grid place-items-center w-10 h-10 text-white font-bold bg-gradient-to-tr from-red-500  to-red-300">
      <Icons.entertainment className="w-5 h-5  " />
    </span>
  );
};
const ShoppingCard = () => {
  return (
    <span className="rounded-full grid place-items-center w-10 h-10 text-white font-bold bg-gradient-to-tr from-purple-600  to-fuchsia-400">
      <Icons.shopping className="w-5 h-5  " />
    </span>
  );
};
