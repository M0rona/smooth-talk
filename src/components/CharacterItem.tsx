import { forwardRef, Ref, ReactNode, DOMAttributes } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { tv } from "tailwind-variants";

interface CharacterItemProps extends DOMAttributes<HTMLDivElement> {
  text: string;
  active?: boolean;
  viewBox?: string;
  children?: ReactNode;
}

export const CharacterItem = forwardRef(
  (
    { text, active, viewBox, children, ...props }: CharacterItemProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const setActive = tv({
      base: " relative pointer flex w-24 h-24 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg p-5 transition-colors",
      variants: {
        active: {
          true: "bg-pool-water",
          false: "hover:bg-anchors-aweigh",
          undefined: "hover:bg-anchors-aweigh",
        },
      },
    });

    return (
      <div className={setActive({ active })} ref={ref} {...props}>
        {!children && (
          <>
            <Cross1Icon width={25} height={25} />
            <span>{text}</span>
          </>
        )}

        {children && (
          <>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox={viewBox}>
              {children}
            </svg>
            <span>{text}</span>
          </>
        )}
      </div>
    );
  },
);

CharacterItem.displayName = "CharacterItem";
