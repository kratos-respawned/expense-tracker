import { DropdownMenuDemo } from "@/components/CardDialog";
import { Icons } from "@/components/Icons";
import AddItem from "@/components/add-item";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="p-4">
      <Card className="h-[40vh] ">
        <CardContent className="grid place-items-center h-full">
          <h1 className="text-6xl font-semibold tracking-wide">&#8377;1500</h1>
        <AddItem/>
        </CardContent>
      </Card>
      {/* <div className='border-2 border-white h-52 grid place-items-center '>
        
      </div> */}
      <div className="space-y-5 ">
        <Card className="flex justify-between">
          <CardHeader>
          <CardTitle>Biryani</CardTitle>
          <CardDescription>200</CardDescription>
          </CardHeader>
          <DropdownMenuDemo/>
          
        </Card>
        
      </div>
    </main>
  );
}
