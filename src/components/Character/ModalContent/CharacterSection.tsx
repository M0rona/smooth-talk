import { Button } from "@/components/Button";
import { BigHeadCharacter } from "../../BigHeadCharacter";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { useState } from "react";
import { RamdomCharacter } from "@/hooks/RadomCharacter";

export const CharacterSection = () => {
  const { bigHeadProps } = useCharacterContext();
  const [bigHead, setBigHead] = useState(bigHeadProps);

  return (
    <div className="relative flex flex-col items-center gap-4">
      <BigHeadCharacter className="w-60" characteristics={bigHead} />

      <Button
        secondary
        size="default"
        iconLeft="ShuffleIcon"
        className="absolute -right-5 -top-5 rounded-full"
        onClick={() => RamdomCharacter(setBigHead)}
      />
    </div>
  );
};
