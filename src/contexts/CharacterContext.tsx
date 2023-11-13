"use client";

import { useContext, createContext, useState, ReactNode } from "react";
import { AvatarProps } from "@/BigHeads";

export interface CharacterContextProps {
  bigHeadProps: AvatarProps;
  setBigHeadProps: (bigHeadProps: AvatarProps) => void;
  bigHeadRiding: AvatarProps;
  setBigHeadRiding: (bigHeadRiding: AvatarProps) => void;
}

const CharacterContext = createContext<CharacterContextProps | undefined>(
  undefined,
);

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [bigHeadProps, setBigHeadProps] = useState<AvatarProps>({});
  const [bigHeadRiding, setBigHeadRiding] = useState<AvatarProps>({});

  return (
    <CharacterContext.Provider
      value={{ bigHeadProps, setBigHeadProps, bigHeadRiding, setBigHeadRiding }}
    >
      {children}
    </CharacterContext.Provider>
  );
};

export const useCharacterContext = () => {
  const context = useContext(CharacterContext);

  if (!context) {
    throw new Error(
      "useCharacterContext must be used within a CharacterProvider",
    );
  }

  return context;
};
