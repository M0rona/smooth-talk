import { RemoveSpecials } from "@/hooks/RemoveSpecials";
import { Trigger } from "@radix-ui/react-tabs";
import { tv } from "tailwind-variants";

interface TabProviderProps {
  className?: string;
  items: string[];
  prefix: string;
  sub?: boolean;
}

const triggerClass = tv({
  base: "ml-2 rounded-xl p-4 transition-colors first:ml-0 hover:bg-white/10",
  variants: {
    sub: {
      true: "data-[state=active]:border-b-4 data-[state=active]:border-b-pool-water data-[state=active]:bg-blue-ribbon/40",
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
          key={RemoveSpecials(item.toLowerCase())}
        >
          {item}
        </Trigger>
      ))}
    </>
  );
};
