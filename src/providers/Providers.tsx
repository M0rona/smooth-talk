"use client";

import { CharacterProvider } from "@/contexts/CharacterContext";
import { UserProvider } from "@/contexts/UserContext";

export const UserProviders = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserProvider>
      <CharacterProvider>{children}</CharacterProvider>
    </UserProvider>
  );
};
