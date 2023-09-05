"use client";
import { Drawer } from "vaul";
import { Button } from "./ui/button";
import { Icons } from "./Icons";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { useRef, useState } from "react";
import { addExpense } from "../../actions/addExpense";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { Popover, PopoverContent, PopoverTrigger } from "./ui/popover";
import { Calendar } from "./ui/calendar";
import { cn } from "@/lib/utils";
import { useToast } from "./ui/use-toast";

export function AddItem() {
  const [isloading, setLoading] = useState(false);
  const [category, setCategory] = useState<string>();
  const [CalenderDate, setDate] = useState<Date | undefined>(undefined);
  const formRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const clientAction = async (data: FormData) => {
    data.append("date", CalenderDate?.toISOString() || new Date().toISOString());
    setLoading(true);
    try {
      const res = await addExpense(data);
      if (!res?.error) {
        formRef.current?.reset();
        setDate(undefined);
      } else {
        toast({
          title: "Something went wrong",
          description: res.error,
        });
      }
    } catch (error) {
      toast({
        title: "Something went wrong",
        description: "Please try again later",
      });
    } finally {
      setLoading(false);
    }
  };
  return (
    <Drawer.Root shouldScaleBackground>
      <Drawer.Trigger asChild>
        <Button
          size={"icon"}
          className="fixed  gradient bottom-4 right-4"
          variant={"outline"}
        >
          <Icons.newItem className="w-5 h-5 text-white" />{" "}
        </Button>
      </Drawer.Trigger>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/80" />
        <Drawer.Content className="bg-background border-t p-4 flex flex-col rounded-t-2xl h-fit  fixed bottom-0 left-0 right-0">
          <div className="mx-auto w-12 h-1.5 flex-shrink-0 rounded-full bg-zinc-300 mb-8" />
          <Drawer.Title className="text-2xl font-semibold leading-none tracking-tight">
            Add Expense
          </Drawer.Title>
          <form ref={formRef} action={clientAction} className="space-y-4  py-4">
            <div className="space-y-1">
              <Label htmlFor="name" className="text-sm text-right">
                Description
              </Label>
              <Input
                id="name"
                type="text"
                name="name"
                required
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
                required
                placeholder="0.00"
              />
            </div>
            <div className=" flex items-center justify-between gap-x-4">
              <Select name="category" required onValueChange={setCategory}>
                <SelectTrigger className="w-[180px]">
                  <SelectValue placeholder="Select Category" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Category</SelectLabel>
                    <SelectItem value="FOOD">Food</SelectItem>
                    <SelectItem value="TRAVEL">Travel</SelectItem>
                    <SelectItem value="ENTERTAINMENT">Entertainment</SelectItem>
                    <SelectItem value="SHOPPING">Other</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Popover >
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    size={"icon"}
                    className={cn(CalenderDate && "bg-primary text-white ")}
                  >
                    <Icons.calender className=" h-4 w-4   " />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={CalenderDate}
                    onSelect={(date) => {
                      console.log(CalenderDate);
                      setDate(date || new Date());
                    }}
                    disabled={(date) =>
                      date > new Date() || date < new Date("1900-01-01")
                    }
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </div>
            <Button
              type="submit"
              size={"default"}
              disabled={isloading}
              className=" mx-auto flex mt-4 gradient text-base disabled:opacity-60 disabled:pointer-events-none"
            >
              {isloading ? (
                <Icons.loader className="w-5 h-5 mr-2 animate-spin" />
              ) : (
                <Icons.edit className="w-5 h-5 mr-2" />
              )}
              Add
            </Button>
          </form>
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
