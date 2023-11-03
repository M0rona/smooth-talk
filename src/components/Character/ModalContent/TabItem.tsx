import { ButtonHTMLAttributes, forwardRef, Ref } from "react";

interface TabItemProps {
  text: string;
}

export const TabItem = forwardRef(
  ({ text, ...props }: TabItemProps, ref: Ref<HTMLButtonElement>) => {
    return (
      <button
        ref={ref}
        className="rounded-xl p-4 transition-colors hover:bg-white/10"
        {...props}
      >
        {text}
      </button>
    );
  },
);

TabItem.displayName = "TabItem";
