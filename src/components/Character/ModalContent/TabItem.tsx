import { ButtonHTMLAttributes, forwardRef, Ref } from "react";

interface TabItemProps {
  text: string;
}

export const TabItem = forwardRef(
  ({ text, ...props }: TabItemProps, ref: Ref<HTMLButtonElement>) => {
    return (
      <button ref={ref} className="p-4" {...props}>
        {text}
      </button>
    );
  },
);

TabItem.displayName = "TabItem";
