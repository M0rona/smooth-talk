import { removeSpecials } from "@/utils/RemoveSpecials";
import { Trigger } from "@radix-ui/react-tabs";
import { tv } from "tailwind-variants";

interface TabProviderProps {
  className?: string;
  items: string[];
  prefix: string;
  sub?: boolean;
}

const triggerClass = tv({
  base: "transition-all text-sm p-4 rounded-lg hover:data-[state=inactive]:text-pool-water",
  variants: {
    sub: {
      true: "data-[state=active]:border-b-pool-water data-[state=active]:text-pool-water data-[state=active]:bg-coarse-wool",
      undefined: "data-[state=active]:bg-pool-water",
    },
  },
});

export const TabProvider = ({
  className,
  items,
  prefix,
  sub,
}: TabProviderProps) => {
  return (
    <>
      {items.map((item, i) => (
        <Trigger
          className={triggerClass({ className, sub })}
          value={`${prefix}-${i + 1}`}
          key={removeSpecials(item.toLowerCase())}
        >
          {item}
        </Trigger>
      ))}
    </>
  );
};
