import { ComponentProps } from "react";
import { tv, VariantProps } from "tailwind-variants";

type ButtonProps = ComponentProps<"button"> &
  VariantProps<typeof button> & {
    text?: string;
  };

const button = tv({
  base: "rounded-lg transition-colors font-semibold",
  variants: {
    size: {
      default: "p-4",
      sm: "p-2 text-xs",
      lg: "rounded-2xl p-5 text text-base font-semibold",
      xl: "rounded-lg bg-blue-ribbon p-5 text-xl font-semibold transition-colors hover:bg-blue-700",
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
  ...props
}: ButtonProps) => {
  const haveText = text != "" && text != undefined;

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
      })}
    >
      {text}
    </button>
  );
};
