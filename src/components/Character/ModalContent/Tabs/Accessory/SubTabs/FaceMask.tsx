import { CharacterItem } from "@/components/CharacterItem";
import {
  FaceMask as MaskItems,
  FaceMaskProps,
} from "@/BigHeads/components/FaceMask";
import { Characteristics } from "@/utils/Characteristics";
import { useCharacterContext } from "@/contexts/CharacterContext";

export const FaceMask = () => {
  const { bigHeadRiding, setBigHeadRiding } = useCharacterContext();

  const removeMask = () => {
    const bigHeads = { ...bigHeadRiding };
    bigHeads.faceMask = false;
    setBigHeadRiding(bigHeads);
  };

  const changeColor = (color: FaceMaskProps["color"]) => {
    const bigHeads = { ...bigHeadRiding };
    bigHeads.faceMask = true;
    bigHeads.faceMaskColor = color;
    setBigHeadRiding(bigHeads);
  };

  return (
    <>
      <CharacterItem
        text="Sem"
        active={!bigHeadRiding.faceMask}
        onClick={removeMask}
      />

      {Characteristics.faceMaskColor.name.map((color, i) => {
        return (
          <CharacterItem
            key={color}
            viewBox="240 550 520 215"
            text={Characteristics.faceMaskColor.text[i]}
            active={
              bigHeadRiding.faceMask && bigHeadRiding.faceMaskColor == color
            }
            onClick={() => changeColor(color as FaceMaskProps["color"])}
          >
            <MaskItems color={color as FaceMaskProps["color"]} />
          </CharacterItem>
        );
      })}
    </>
  );
};
