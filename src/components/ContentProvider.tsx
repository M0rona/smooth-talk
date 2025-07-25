import { Content } from "@radix-ui/react-tabs";

interface ContentProviderProps {
  items: JSX.Element[];
  prefix: string;
}

export const ContentProvider = ({ items, prefix }: ContentProviderProps) => {
  return (
    <>
      {items.map((item, i) => (
        <Content
          key={item.key}
          value={`${prefix}-${i + 1}`}
          className="flex flex-wrap gap-2 p-2 data-[state=inactive]:hidden"
        >
          {item}
        </Content>
      ))}
    </>
  );
};
