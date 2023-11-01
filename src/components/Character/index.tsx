"use client";

import { BigHead } from "@bigheads/core";
import { useUserContext } from "@/contexts/User";
import { ModalCharacter } from "./ModalCharacter";

export const Character = () => {
  const { setUserName } = useUserContext();

  return (
    <div className="flex flex-col items-center gap-6">
      <ModalCharacter>
        {/* Character */}
        <div className="relative h-56 min-h-[14rem] w-56 overflow-hidden rounded-full bg-radial">
          <div className="scale-105">
            <BigHead
              accessory="tinyGlasses"
              body="chest"
              circleColor="blue"
              clothing="naked"
              clothingColor="blue"
              eyebrows="raised"
              eyes="wink"
              faceMask={false}
              faceMaskColor="green"
              facialHair="none2"
              graphic="none"
              hair="none"
              hairColor="orange"
              hat="none5"
              hatColor="green"
              lashes={false}
              lipColor="green"
              mask={false}
              mouth="serious"
              skinTone="brown"
            />
          </div>

          {/* hover */}
          <div className="absolute bottom-0 flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black/70 opacity-0 transition-opacity ease-in-out hover:border-2 hover:border-zinc-100 hover:opacity-100">
            <span className="text-center text-xl">
              Alterar <br /> personagem
            </span>
          </div>
        </div>
      </ModalCharacter>

      <input
        type="text"
        placeholder="Alterar nome"
        className="bg-transparent text-center text-xl outline-none"
        onBlur={(e) => setUserName(e.target.value)}
      />
    </div>
  );
};
