import { BigHeadCharacter } from "../BigHeadCharacter";

export const ModalContent = () => {
  return (
    <>
      <div className="flex items-center">
        <section className="w-1/4">
          {/* Character */}
          <BigHeadCharacter />
        </section>
        <section className="w-3/4"></section>
      </div>
    </>
  );
};
