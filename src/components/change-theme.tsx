"use client"

import * as React from "react"
import { useTheme } from "next-themes"

// import { Icons } from "@/components/icons"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu"
import { Button } from "./ui/button"
import { Icons } from "./Icons"

export function ChangeTheme() {
  const theme = useTheme()
const toggleTheme = () => {
  theme.theme === "dark" ? theme.setTheme("light") : theme.setTheme("dark")
}
  return (
    
        <Button variant="outline" size={"icon"} onClick={toggleTheme}>
          <Icons.sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Icons.moon className="absolute w-5 h-5 rotate-180 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
  )
}