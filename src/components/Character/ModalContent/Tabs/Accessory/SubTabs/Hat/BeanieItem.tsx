import { useState, useMemo } from "react";
import { Front } from "@/BigHeads/components/hats/Beanie";
import { ClothingProps } from "@/BigHeads/components/clothing/types";
import { CharacterItem } from "@/components/CharacterItem";
import { MoreItems } from "@/components/MoreItems";
import { characteristics } from "@/utils/characteristics";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { onOpenMore } from "@/utils/onOpenMore";

export const BeanieItem = () => {
  const [openMore, setOpenMore] = useState<boolean>(false);
  const { bigHeadRiding, setBigHeadRiding } = useCharacterContext();

  const beanieColor = useMemo(() => {
    if (bigHeadRiding.hat == "beanie") {
      return bigHeadRiding.hatColor as ClothingProps["color"];
    }
  }, [bigHeadRiding.hat, bigHeadRiding.hatColor]);

  const changeBeanie = (color: ClothingProps["color"]) => {
    const bigHeads = { ...bigHeadRiding };
    bigHeads.hat = "beanie";
    bigHeads.hatColor = color;
    setBigHeadRiding(bigHeads);
  };

  return (
    <CharacterItem
      text={characteristics.hat.text[0]}
      viewBox="200 100 600 400"
      active={bigHeadRiding.hat == "beanie"}
      sub={
        openMore && (
          <MoreItems setClose={setOpenMore}>
            {characteristics.hatColor.name.map((name, index) => {
              return (
                <CharacterItem
                  viewBox="200 100 600 400"
                  text={characteristics.hatColor.text[index]}
                  active={name == beanieColor}
                  onClick={() => changeBeanie(name as ClothingProps["color"])}
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
      onClick={(e) => onOpenMore(e, setOpenMore)}
    >
      <Front color={beanieColor ? beanieColor : "white"} />
    </CharacterItem>
  );
};
