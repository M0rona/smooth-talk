import { forwardRef, Ref } from "react";
import { BigHead, AvatarProps } from "@bigheads/core";

interface BigHeadProps {
  hover?: boolean;
  characteristics: AvatarProps;
}

export const BigHeadCharacter = forwardRef(
  (
    { hover, characteristics, ...props }: BigHeadProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    return (
      <div
        ref={ref} // Passando a referência para o elemento div
        className="relative h-56 min-h-[14rem] w-56 overflow-hidden rounded-full bg-radial"
        {...props}
      >
        <div className="scale-105">
          <BigHead circleColor="blue" mask={false} {...characteristics} />
        </div>

        {hover && (
          <div className="absolute bottom-0 flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-black/70 opacity-0 transition-opacity ease-in-out hover:border-2 hover:border-zinc-100 hover:opacity-100">
            <span className="text-center text-xl">
              Alterar <br /> personagem
            </span>
          </div>
        )}
      </div>
    );
  },
);

BigHeadCharacter.displayName = "BigHeadCharacter";
