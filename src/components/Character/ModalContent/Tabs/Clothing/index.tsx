import { Root, List } from "@radix-ui/react-tabs";
import { TabProvider } from "../../../../TabProvider";
import { ContentProvider } from "../../../../ContentProvider";
import { ItemsClothing } from "./SubTabs/ItemsClothing";
import { Graphic } from "./SubTabs/Graphic";

export const Clothing = () => {
  return (
    <Root defaultValue="subtab-1" className="w-full">
      <List className="flex justify-center gap-3">
        <TabProvider prefix="subtab" items={["Items", "Estampa"]} sub />
      </List>

      <ContentProvider
        prefix="subtab"
        items={[
          <ItemsClothing key="itemsclothing" />,
          <Graphic key="graphic" />,
        ]}
      />
    </Root>
  );
};
