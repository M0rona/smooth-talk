import { CharacterItem } from "@/components/CharacterItem";
import {
  FaceMask as MaskItems,
  FaceMaskProps,
} from "@/BigHeads/components/FaceMask";
import { Characteristics } from "@/hooks/Characteristics";

export const FaceMask = () => {
  return (
    <>
      {Characteristics.faceMaskColor.map((color) => {
        return (
          <CharacterItem key={color}>
            <MaskItems color={color as FaceMaskProps["color"]} />
          </CharacterItem>
        );
      })}
    </>
  );
};
