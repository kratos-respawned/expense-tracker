import { DropdownMenuDemo } from "@/components/CardDialog";
import { Icons } from "@/components/Icons";
import AddItem from "@/components/add-item";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4">
      <div className="bg-gradient-to-br rounded-lg  from-[#3FA3E7] via-[#D386FE] to-[#F59693] ">
      <Card className=" border-none text-white dottedGradient">
        <CardHeader className="pb-2">
        <CardTitle className="text-center text-sm">Total Balance</CardTitle>
        </CardHeader>
        <CardContent className="text-3xl font-bold text-center pt-0">
          <p>$4000.00</p>
        </CardContent>
        <CardFooter className="justify-between">
          <div className="flex text-sm">
            <Icons.upArrow/>
          <p>Income</p>
          </div>
          <div className="flex text-sm">
          <p>Income</p>
          </div>
        </CardFooter>
      </Card>
      </div>
      <div className="space-y-5 mt-5">
        <Card className="flex justify-between">
          <CardHeader>
          <CardTitle>Biryani</CardTitle>
          <CardDescription>&#8377;200</CardDescription>
          </CardHeader>
          <DropdownMenuDemo/>
          
        </Card>
        
      </div>
    </main>
  );
}
