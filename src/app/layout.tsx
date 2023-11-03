import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { UserProvider } from "@/contexts/User";
import { CharacterProvider } from "@/contexts/CharacterContext";

const mainFontFamily = Open_Sans({
  subsets: ["latin"],
  variable: "--font-family-main",
});

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
    <html lang="pt-br" className={mainFontFamily.variable}>
      <body className="bg-coarse-wool font-sans text-zinc-100">
        <UserProvider>
          <CharacterProvider>{children}</CharacterProvider>
        </UserProvider>
      </body>
    </html>
  );
}
