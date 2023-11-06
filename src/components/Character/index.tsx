"use client";

import { useEffect } from "react";
import { useUserContext } from "@/contexts/User";
import { Modal } from "../Modal";
import { ModalContent } from "./ModalContent";
import { BigHeadCharacter } from "./BigHeadCharacter";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { RamdomCharacter } from "@/hooks/RadomCharacter";
import { Skeleton } from "../Skeleton";

export const Character = () => {
  const { setUserName } = useUserContext();
  const { bigHeadProps, setBigHeadProps } = useCharacterContext();

  useEffect(() => {
    RamdomCharacter(setBigHeadProps);
  }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      <Modal content={<ModalContent />} w="w-[55vw]">
        {Object.keys(bigHeadProps).length ? (
          <BigHeadCharacter hover w="w-56" characteristics={bigHeadProps} />
        ) : (
          <Skeleton className="h-56 min-h-[14rem] w-56 rounded-full" />
        )}
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
