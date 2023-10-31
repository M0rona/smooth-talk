import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/contexts/User";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Smooth Talk",
  description: "Uma forma rápida e bonita para se comunicar!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={inter.className + " bg-coarse-wool text-zinc-100"}>
        <UserProvider>
          {children}
        </UserProvider>
      </body>
    </html>
  );
}
