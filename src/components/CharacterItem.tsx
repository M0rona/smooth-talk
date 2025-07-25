import { forwardRef, Ref, ReactNode, DOMAttributes } from "react";
import { Cross1Icon } from "@radix-ui/react-icons";
import { tv } from "tailwind-variants";
import { AnimatePresence } from "framer-motion";

interface CharacterItemProps extends DOMAttributes<HTMLDivElement> {
  text: string;
  active?: boolean;
  viewBox?: string;
  sub?: JSX.Element | boolean;
  more?: boolean;
  children?: ReactNode;
}

export const CharacterItem = forwardRef(
  (
    {
      text,
      active,
      viewBox,
      sub,
      more,
      children,
      ...props
    }: CharacterItemProps,
    ref: Ref<HTMLDivElement>,
  ) => {
    const setActive = tv({
      base: "relative pointer flex w-24 h-24 cursor-pointer flex-col items-center justify-center gap-3 rounded-lg p-4 transition-colors",
      variants: {
        active: {
          true: "bg-pool-water",
          false: "data-[moreitems=closed]:hover:bg-anchors-aweigh",
          undefined: "data-[moreitems=closed]:hover:bg-anchors-aweigh",
        },
        more: {
          true: "w-20 h-20 text-xs p-3",
        },
      },
    });

    return (
      <div
        className={setActive({ active, more })}
        ref={ref}
        data-moreitems={sub ? "open" : "closed"}
        {...props}
      >
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

        <AnimatePresence>{sub && <>{sub}</>}</AnimatePresence>
      </div>
    );
  },
);

CharacterItem.displayName = "CharacterItem";
