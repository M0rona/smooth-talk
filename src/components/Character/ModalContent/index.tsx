import { Button } from "@/components/Button";
import { BigHeadCharacter } from "../BigHeadCharacter";
import { RamdomCharacter } from "@/hooks/RadomCharacter";

export const ModalContent = () => {
  return (
    <>
      <div className="flex items-center">
        <section className="flex w-1/4 flex-col items-center justify-center gap-5">
          {/* Character */}
          <BigHeadCharacter />

          <Button text="Aleatório" secondary onClick={RamdomCharacter} />
        </section>
        <section className="w-3/4"></section>
      </div>
    </>
  );
};
