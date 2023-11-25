import { CharacterItem } from "@/components/CharacterItem";
import { Back } from "@/BigHeads/components/bodies/Breasts";
import { Back as BackChest } from "@/BigHeads/components/bodies/Chest";
import { characteristics } from "@/utils/characteristics";
import { BaseBody } from "./BaseBody";

export const ItemsBody = () => {
  return (
    <>
      <CharacterItem
        text={characteristics.body.text[0]}
        viewBox="355 825 290 140"
      >
        <BackChest />
      </CharacterItem>

      <CharacterItem
        text={characteristics.body.text[1]}
        viewBox="355 825 290 140"
      >
        <Back clothingColor="blue" braStraps={true} />
      </CharacterItem>

      <BaseBody />
    </>
  );
};
