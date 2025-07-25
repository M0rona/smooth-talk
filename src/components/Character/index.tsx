"use client";

import { useEffect } from "react";
import { useUserContext } from "@/contexts/UserContext";
import { Modal } from "../Modal";
import { ModalContent } from "./ModalContent";
import { BigHeadCharacter } from "../BigHeadCharacter";
import { useCharacterContext } from "@/contexts/CharacterContext";
import { ramdomCharacter } from "@/utils/radomCharacter";
import { Skeleton } from "../Skeleton";

export const Character = () => {
  const { setUserName } = useUserContext();
  const { bigHeadProps, setBigHeadProps } = useCharacterContext();

  useEffect(() => {
    ramdomCharacter(setBigHeadProps);

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="flex flex-col items-center gap-6">
      <Modal content={<ModalContent />} className="w-[63rem]">
        {Object.keys(bigHeadProps).length ? (
          <BigHeadCharacter
            hover
            className="w-56"
            characteristics={bigHeadProps}
          />
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
