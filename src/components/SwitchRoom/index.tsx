"use client";

import { ItemSwitch } from "./ItemSwitch";
import { useState, ChangeEvent } from "react";

export const SwitchRoom = () => {
  const [isCreateRoom, setIsCreateRoom] = useState<boolean>(true);
  const [codeRoom, setCodeRoom] = useState<string>("");

  const enteredTheRoomCode = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length <= 30) {
      setCodeRoom(e.target.value);
    }
  };

  return (
    <>
      {/* Switch */}
      <div className="relative flex w-3/4 justify-center gap-3">
        <ItemSwitch
          text="Criar sala"
          state={{ isCreateRoom, setIsCreateRoom }}
          set={true}
        />
        <ItemSwitch
          text="Entrar na sala"
          state={{ isCreateRoom, setIsCreateRoom }}
          set={false}
        />

        {/* BG Slide Effect */}
        <div
          className={`absolute z-0 h-full w-1/2 rounded-2xl bg-pool-water transition-all ${
            isCreateRoom ? "left-0" : "left-[50%]"
          }`}
        />
      </div>

      {/* Input */}
      <div className="flex w-full border-b p-2">
        <input
          type="text"
          value={codeRoom}
          placeholder={`Insira o ${
            isCreateRoom ? "nome" : "código"
          } da sala/reunião...`}
          className="w-full bg-transparent outline-none"
          onChange={enteredTheRoomCode}
        />
        <span>{codeRoom.length}/30</span>
      </div>

      <button className="w-1/2 rounded-lg bg-blue-ribbon py-5 text-xl font-semibold transition-colors hover:bg-blue-700">
        {isCreateRoom ? "Criar" : "Entrar"}
      </button>
    </>
  );
};
