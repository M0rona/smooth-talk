"use client";

import { Item } from "./Item";
import { useState } from "react";

export const SwitchRoom = () => {
  const [isCreateRoom, setIsCreateRoom] = useState(true);

  return (
    <>
      <div className="relative flex w-full justify-center gap-1">
        <Item text="Criar sala" />
        <Item text="Entrar na sala" />

        {/* BG Slide Effect */}
        <div className="absolute left-0 z-0 z-0 h-full w-1/2 rounded-2xl bg-pool-water" />
      </div>
    </>
  );
};
