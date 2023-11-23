import { useMemo, useState } from "react";
import { CharacterItem } from "@/components/CharacterItem";
import { Front } from "@/BigHeads/components/hats/Turban";
import { characteristics } from "@/utils/characteristics";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { onOpenMore } from "@/utils/onOpenMore";
import { ClothingProps } from "@/BigHeads/components/clothing/types";
import { MoreItems } from "@/components/MoreItems";

export const TurbanItem = () => {
  const [openMore, setOpenMore] = useState<boolean>(false);
  const { bigHeadRiding, setBigHeadRiding } = useCharacterContext();

  const turbanColor = useMemo(() => {
    if (bigHeadRiding.hat == "turban") {
      return bigHeadRiding.hatColor as ClothingProps["color"];
    }
  }, [bigHeadRiding.hat, bigHeadRiding.hatColor]);

  const changeBeanie = (color: ClothingProps["color"]) => {
    const bigHeads = { ...bigHeadRiding };
    bigHeads.hat = "turban";
    bigHeads.hatColor = color;
    setBigHeadRiding(bigHeads);
  };

  return (
    <CharacterItem
      text={characteristics.hat.text[1]}
      viewBox="170 92 615 450"
      active={bigHeadRiding.hat == "turban"}
      sub={
        openMore && (
          <MoreItems setClose={setOpenMore}>
            {characteristics.hatColor.name.map((name, index) => {
              return (
                <CharacterItem
                  viewBox="200 100 600 400"
                  text={characteristics.hatColor.text[index]}
                  active={name == turbanColor}
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
      <Front color={turbanColor ? turbanColor : "white"} />
    </CharacterItem>
  );
};
