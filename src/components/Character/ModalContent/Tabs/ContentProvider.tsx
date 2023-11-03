import { Content } from "@radix-ui/react-tabs";

interface ContentProviderProps {
  items: JSX.Element[];
}

export const ContentProvider = ({ items }: ContentProviderProps) => {
  return (
    <>
      {items.map((item, i) => (
        <Content key={i} value={`tab${i + 1}`}>
          {item}
        </Content>
      ))}
    </>
  );
};
