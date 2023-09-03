"use client";
import { Drawer } from "vaul";
import { Button } from "./ui/button";
import { Icons } from "./Icons";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { addExpense } from "../../actions/addExpense";

export function AddItem() {
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <Button size={"icon"} variant={"outline"}>
          <Icons.settings className="w-5 h-5" />{" "}
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/80" />
        <Drawer.Content className="bg-background border-t p-4 flex flex-col rounded-t-[10px] h-fit  fixed bottom-0 left-0 right-0">
          <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
          <Drawer.Title className="text-2xl font-semibold leading-none tracking-tight">
            Add Expense
          </Drawer.Title>
          <form action={addExpense} className="space-y-4  py-4">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-sm text-right">
                Description
              </Label>
              <Input
                id="name"
                type="text"
                name="name"
                className="col-span-3"
                placeholder="Enter a description"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="price" className="text-right">
                Price
              </Label>
              <Input
                id="price"
                type="number"
                name="amount"
                className=""
                placeholder="0.00"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="expenseDate" className="text-right">
                Date
              </Label>
              <Input
                id="expenseDate"
                type="date"
                name="date"
                className="col-span-3"
                placeholder="Date"
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="expenseDate" className="text-right">
                Category
              </Label>
              <select name="category" id="category" className="col-span-3">
                <option value="FOOD">Food</option>
                <option value="TRAVEL">Travel</option>
                <option value="ENTERTAINMENT">Entertainment</option>
                <option value="SHOPPING">Other</option>
              </select>
            </div>
            <Button
              type="submit"
              size={"default"}
              className=" mx-auto flex mt-4 gradient text-base"
            >
              <Icons.edit className="w-5 h-5 mr-2" />
              Add
            </Button>
          </form>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
