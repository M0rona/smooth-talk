import { useState } from "react";
import { Front } from "@/BigHeads/components/hats/Beanie";
import { ClothingProps } from "@/BigHeads/components/clothing/types";
import { CharacterItem } from "@/components/CharacterItem";
import { MoreItems } from "@/components/MoreItems";
import { Characteristics } from "@/utils/Characteristics";

export const BeanieItem = () => {
  const [openMore, setOpenMore] = useState<boolean>(false);

  return (
    <CharacterItem
      text={Characteristics.hat.text[0]}
      viewBox="200 100 600 400"
      sub={
        openMore && (
          <MoreItems>
            {Characteristics.hatColor.name.map((name, index) => {
              return (
                <CharacterItem
                  viewBox="200 100 600 400"
                  text={Characteristics.hatColor.text[index]}
                  key={name}
                  more
                >
                  <Front color={name as ClothingProps["color"]} />
                </CharacterItem>
              );
            })}
          </MoreItems>
        )
      }
      onClick={() => setOpenMore((currentValue) => !currentValue)}
    >
      <Front color="blue" />
    </CharacterItem>
  );
};
