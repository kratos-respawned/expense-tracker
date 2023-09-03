  
  import { Button } from "@/components/ui/button"
  import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuGroup,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuShortcut,
    DropdownMenuSub,
    DropdownMenuTrigger,
  } from "@/components/ui/dropdown-menu"
import { Icons } from "./Icons"


  export function DropdownMenuDemo() {
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button size="icon"   variant="outline" className=" my-auto mr-5">
          <Icons.dropdown className="" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-36 mr-4">
          <DropdownMenuGroup>
            <DropdownMenuItem >
              <Icons.edit className="mr-2 h-4 w-4"/>
              <span className="">Edit</span>
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Icons.delete className="text-destructive mr-2 h-4 w-4"/>
              <span className="text-red-500">Delete</span>
              </DropdownMenuItem>
          </DropdownMenuGroup>
                </DropdownMenuContent>
      </DropdownMenu>
    )
  }
  