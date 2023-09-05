import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Montserrat } from "next/font/google";
import TailwindProvider from "../components/tailwind-provider";
import { ThemeProvider } from "../components/theme-provider";
import { cn } from "@/lib/utils";
import { Toaster } from "@/components/ui/toaster";

const inter = Montserrat({ subsets: ["latin"] });

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
          {/* <TailwindProvider /> */}
          <Toaster/>
        </ThemeProvider>
      </body>
    </html>
  );
}
