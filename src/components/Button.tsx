import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";
import * as RadixIcon from "@radix-ui/react-icons";

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button> & {
    text?: string;
    iconRight?: keyof typeof RadixIcon;
    iconLeft?: keyof typeof RadixIcon;
  };

const button = tv({
  base: "flex items-center justify-center gap-3 rounded-lg transition-colors font-semibold transition-colors",
  variants: {
    size: {
      default: "p-4",
      sm: "p-2 text-xs",
      lg: "rounded-2xl p-5 text text-base font-semibold",
      xl: "rounded-lg p-5 text-xl font-semibold ",
    },

    haveText: {
      true: "min-w-[6rem]",
    },

    primary: {
      true: "bg-pool-water hover:bg-pool-water/80",
    },

    secondary: {
      true: "bg-dark-e-stormy/50 border border-outline/50 hover:bg-dark-e-stormy hover:border-outline",
    },

    alert: {
      true: "bg-glowing-brake-disc hover:bg-glowing-brake-disc/80",
    },

    ribbon: {
      true: "bg-blue-ribbon hover:bg-blue-700",
    },
  },

  defaultVariants: {
    size: "default",
    primary: true,
  },
});

export const Button = ({
  text,
  className,
  size,
  primary,
  secondary,
  alert,
  ribbon,
  iconRight,
  iconLeft,
  ...props
}: ButtonProps) => {
  const haveText = text != "" && text != undefined;
  const IconRight = iconRight && RadixIcon[iconRight];
  const IconLeft = iconLeft && RadixIcon[iconLeft];

  return (
    <button
      {...props}
      className={button({
        size,
        haveText,
        className,
        primary,
        secondary,
        alert,
        ribbon,
      })}
    >
      {IconLeft && <IconLeft />}
      {text}
      {IconRight && <IconRight />}
    </button>
  );
};
