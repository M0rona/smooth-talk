"use client";

import { useContext, createContext, useState, ReactNode } from "react";
import { AvatarProps } from "@bigheads/core";

export interface CharacterContextProps {
  bigHeadProps: AvatarProps;
  setBigHeadProps: (bigHeadProps: AvatarProps) => void;
}

const CharacterContext = createContext<CharacterContextProps | undefined>(
  undefined,
);

export const CharacterProvider = ({ children }: { children: ReactNode }) => {
  const [bigHeadProps, setBigHeadProps] = useState<AvatarProps>({});

  return (
    <CharacterContext.Provider value={{ bigHeadProps, setBigHeadProps }}>
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
