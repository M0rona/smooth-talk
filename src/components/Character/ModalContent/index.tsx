import { CharacterSection } from "./CharacterSection";
import { Tabs } from "./Tabs";

export const ModalContent = () => {
  return (
    <>
      <div className="flex gap-10">
        <section className="flex flex-col items-center justify-center gap-5">
          <CharacterSection />
        </section>

        <section className="flex-1">
          <Tabs />
        </section>
      </div>
    </>
  );
};
