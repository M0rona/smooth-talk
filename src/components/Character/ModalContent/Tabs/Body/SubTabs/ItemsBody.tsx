import { CharacterItem } from "@/components/CharacterItem";
import { Back } from "@/BigHeads/components/bodies/Breasts";
import { Back as BackChest } from "@/BigHeads/components/bodies/Chest";
import { characteristics } from "@/utils/Characteristics";
import { BaseBody } from "../../../../cmp/BaseBody";

export const ItemsBody = () => {
  return (
    <>
      <CharacterItem
        text={characteristics.body.text[0]}
        viewBox="345 760 300 210"
        // viewBox="355 825 300 140"
      >
        <BaseBody />
        <BackChest />
      </CharacterItem>

      <CharacterItem
        text={characteristics.body.text[1]}
        viewBox="345 760 300 210"
        // viewBox="355 825 300 140"
      >
        <BaseBody />
        <Back clothingColor="blue" braStraps={true} />
      </CharacterItem>

    </>
  );
};
