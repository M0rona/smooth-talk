import { useEffect } from "react";
import { Button } from "@/components/Button";
import { BigHeadCharacter } from "../../BigHeadCharacter";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { ramdomCharacter } from "@/utils/radomCharacter";

export const CharacterSection = () => {
  const { bigHeadProps, bigHeadRiding, setBigHeadRiding } =
    useCharacterContext();

  useEffect(() => {
    setBigHeadRiding(bigHeadProps);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="relative flex flex-col items-center gap-4">
      <BigHeadCharacter className="w-60" characteristics={bigHeadRiding} />

      <Button
        secondary
        size="default"
        iconLeft="ShuffleIcon"
        className="absolute -right-5 -top-5 rounded-full"
        onClick={() => ramdomCharacter(setBigHeadRiding)}
      />
    </div>
  );
};
