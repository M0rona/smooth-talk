import { useState, useMemo } from "react";
import { Front } from "@/BigHeads/components/hats/Beanie";
import { ClothingProps } from "@/BigHeads/components/clothing/types";
import { CharacterItem } from "@/components/CharacterItem";
import { MoreItems } from "@/components/MoreItems";
import { Characteristics } from "@/utils/Characteristics";
import { useCharacterContext } from "@/contexts/CharacterContext";

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
      text={Characteristics.hat.text[0]}
      viewBox="200 100 600 400"
      active={bigHeadRiding.hat == "beanie"}
      sub={
        openMore && (
          <MoreItems setClose={setOpenMore}>
            {Characteristics.hatColor.name.map((name, index) => {
              return (
                <CharacterItem
                  viewBox="200 100 600 400"
                  text={Characteristics.hatColor.text[index]}
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
      onClick={() => setOpenMore((currentValue) => !currentValue)}
    >
      <Front color={beanieColor ? beanieColor : "white"} />
    </CharacterItem>
  );
};
