import { CharacterSection } from "./CharacterSection";
import { Tabs } from "./Tabs";

export const ModalContent = () => {
  return (
    <>
      <div className="flex gap-10">
        <section className="flex w-2/5 flex-col items-center justify-center gap-5">
          <CharacterSection />
        </section>

        <section className="w-fit">
          <Tabs />
        </section>
      </div>
    </>
  );
};
