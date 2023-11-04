import { Root, List } from "@radix-ui/react-tabs";
import { TabProvider } from "./TabProvider";
import { ContentProvider } from "./ContentProvider";
import { Accessory } from "./Accessory";
import { Body } from "./Body";

export const Tabs = () => {
  return (
    <Root defaultValue="tab-1">
      <List>
        <TabProvider
          prefix="tab"
          items={[
            "Acessórios",
            "Córpos",
            "Tons de pele",
            "Roupas",
            "Rostos",
            "Cabelos",
            "Fundos",
          ]}
        />
      </List>

      <ContentProvider
        prefix="tab"
        items={[<Accessory key="Accessory" />, <Body key="body" />]}
      />
    </Root>
  );
};
