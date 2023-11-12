import { ReactNode } from "react";

interface CharacterItemProps {
  children: ReactNode;
}

export const CharacterItem = ({ children }: CharacterItemProps) => {
  return (
    <div className="pointer w-28 cursor-pointer rounded-lg p-5 hover:bg-anchors-aweigh">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="240 550 520 215">
        {children}
      </svg>

      <span>{}</span>
    </div>
  );
};
