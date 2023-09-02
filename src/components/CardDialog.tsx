  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    // DropdownMenuLabel,
    // DropdownMenuPortal,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    // DropdownMenuSubContent,
    // DropdownMenuSubTrigger,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Icons } from "./Icons"


  export function DropdownMenuDemo() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon"  variant="outline" className=" my-auto mr-5">
          <Icons.dropdown className="" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-36 mr-4">
          {/* <DropdownMenuLabel>Edit</DropdownMenuLabel> */}
          <DropdownMenuSeparator />
          <DropdownMenuGroup>
            <DropdownMenuItem >
              {/* <User className="mr-2 h-4 w-4" /> */}
              <span className="">Edit</span>
              <DropdownMenuShortcut><Icons.edit/></DropdownMenuShortcut>
            </DropdownMenuItem>
            <DropdownMenuItem>
              {/* <CreditCard className="mr-2 h-4 w-4" /> */}
              <span className="text-red-500">Delete</span>
              <DropdownMenuShortcut><Icons.delete className="text-red-500"/></DropdownMenuShortcut>
              </DropdownMenuItem>
          </DropdownMenuGroup>
                </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  