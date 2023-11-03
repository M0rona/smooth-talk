import { Trigger } from "@radix-ui/react-tabs";

interface TabProviderProps {
  items: string[];
}

export const TabProvider = ({ items }: TabProviderProps) => {
  return (
    <>
      {items.map((item, i) => (
        <Trigger
          className="rounded-xl p-4 transition-colors hover:bg-white/10 data-[state=active]:bg-pool-water"
          value={`tab${i + 1}`}
          key={item}
        >
          {item}
        </Trigger>
      ))}
    </>
  );
};
