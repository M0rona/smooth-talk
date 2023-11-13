import { Root, List } from "@radix-ui/react-tabs";
import { TabProvider } from "../../../../TabProvider";
import { ContentProvider } from "../../../../ContentProvider";
import { ItemsBody } from "./SubTabs/ItemsBody";
import { SkinTone } from "../SkinTone";

export const Body = () => {
  return (
    <Root defaultValue="subtab-1" className="w-full">
      <List className="flex justify-center gap-3">
        <TabProvider prefix="subtab" items={["Items", "Tom de pele"]} sub />
      </List>

      <ContentProvider
        prefix="subtab"
        items={[<ItemsBody key="itemsbody" />, <SkinTone key="skintone" />]}
      />
    </Root>
  );
};
