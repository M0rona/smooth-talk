import { CharacterItem } from "@/components/CharacterItem";
import { Front as Turban } from "@/BigHeads/components/hats/Turban";
import { Front as Beanie } from "@/BigHeads/components/hats/Beanie";
import { Characteristics } from "@/utils/Characteristics";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { MoreItems } from "@/components/MoreItems";

export const Hat = () => {
  const { bigHeadRiding, setBigHeadRiding } = useCharacterContext();

  return (
    <>
      <CharacterItem text="Sem" active={true} />

      <MoreItems>
        <CharacterItem
          text={Characteristics.hat.text[0]}
          viewBox="200 100 600 400"
        >
          <Beanie color="blue" />
        </CharacterItem>
      </MoreItems>

      <CharacterItem
        text={Characteristics.hat.text[1]}
        viewBox="170 92 615 450"
      >
        <Turban color="blue" />
      </CharacterItem>
    </>
  );
};
