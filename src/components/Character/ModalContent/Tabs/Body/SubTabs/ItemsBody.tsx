import { CharacterItem } from "@/components/CharacterItem";
import { Front as Breasts } from "@/BigHeads/components/bodies/Breasts";
import { Front as Chest } from "@/BigHeads/components/bodies/Chest";
import { characteristics } from "@/utils/characteristics";

export const ItemsBody = () => {
  return (
    <>
      <CharacterItem
        text={characteristics.body.text[0]}
        viewBox="355 825 290 140"
      >
        <Breasts clothingColor="white" braStraps={false} />
      </CharacterItem>
    </>
  );
};
