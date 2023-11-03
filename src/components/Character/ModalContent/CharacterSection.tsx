import { Button } from "@/components/Button";
import { BigHeadCharacter } from "../BigHeadCharacter";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { useState } from "react";
import { RamdomCharacter } from "@/hooks/RadomCharacter";

export const CharacterSection = () => {
  const { bigHeadProps } = useCharacterContext();
  const [bigHead, setBigHead] = useState(bigHeadProps);

  return (
    <>
      <BigHeadCharacter characteristics={bigHead} />

      <Button
        text="Aleatório"
        secondary
        onClick={() => RamdomCharacter(setBigHead)}
      />
    </>
  );
};
