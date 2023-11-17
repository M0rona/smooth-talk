import { CharacterItem } from "@/components/CharacterItem";
import { Front as Turban } from "@/BigHeads/components/hats/Turban";
import { Characteristics } from "@/utils/Characteristics";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { BeanieItem } from "./BeanieItem";

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

      <CharacterItem
        text={Characteristics.hat.text[1]}
        viewBox="170 92 615 450"
      >
        <Turban color="white" />
      </CharacterItem>
    </>
  );
};
