"use client";

import { useUserContext } from "@/contexts/User";
import { Modal } from "../Modal";
import { ModalContent } from "./ModalContent";
import { BigHeadCharacter } from "./BigHeadCharacter";

export const Character = () => {
  const { setUserName } = useUserContext();

  return (
    <div className="flex flex-col items-center gap-6">
      <Modal content={<ModalContent />} w="50vw">
        <BigHeadCharacter hover />
      </Modal>

      <input
        type="text"
        placeholder="Alterar nome"
        className="bg-transparent text-center text-xl outline-none"
        onBlur={(e) => setUserName(e.target.value)}
      />
    </div>
  );
};
