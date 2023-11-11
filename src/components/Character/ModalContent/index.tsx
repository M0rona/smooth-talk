import { CharacterSection } from "./CharacterSection";
import { Tabs } from "./Tabs";

export const ModalContent = () => {
  return (
    <>
      <div className="flex h-full gap-10">
        <section className="flex w-2/4 flex-col items-center justify-center gap-5">
          <CharacterSection />
        </section>

        <section className="w-full">
          <Tabs />
        </section>
      </div>
    </>
  );
};
