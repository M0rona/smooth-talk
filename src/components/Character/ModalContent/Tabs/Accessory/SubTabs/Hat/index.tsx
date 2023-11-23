import { CharacterItem } from "@/components/CharacterItem";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { BeanieItem } from "./BeanieItem";
import { TurbanItem } from "./TurbanItem";

export const Hat = () => {
  const { bigHeadRiding, setBigHeadRiding } = useCharacterContext();

  const removeHat = () => {
    const bigHeads = { ...bigHeadRiding };
    bigHeads.hat = "none";
    setBigHeadRiding(bigHeads);
  };

  return (
    <>
      <CharacterItem
        text="Sem"
        active={bigHeadRiding.hat == "none"}
        onClick={removeHat}
      />

      <BeanieItem />

      <TurbanItem />
    </>
  );
};
