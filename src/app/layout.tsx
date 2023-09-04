import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import TailwindProvider from "../components/tailwind-provider";
import { ThemeProvider } from "../components/theme-provider";
import { ChangeTheme } from "@/components/change-theme";
import { cn } from "@/lib/utils";
import {AddItem} from "@/components/AddItem";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Expense Tracker",
  description: "Created with 🤬🤬",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={ cn("min-h-screen",inter.className)}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem >
          {children}
          <AddItem/>
          <TailwindProvider />
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  );
}
