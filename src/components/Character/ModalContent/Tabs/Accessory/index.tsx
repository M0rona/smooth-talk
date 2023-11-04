import { Root, List } from "@radix-ui/react-tabs";
import { TabProvider } from "../TabProvider";
import { ContentProvider } from "../ContentProvider";
import { FaceMask } from "./SubTabs/FaceMask";
import { Hat } from "./SubTabs/Hat";

export const Accessory = () => {
  return (
    <Root defaultValue="subtab-1">
      <List>
        <TabProvider
          prefix="subtab"
          items={["Máscaras faciais", "Chápeus"]}
          sub
        />
      </List>

      <ContentProvider
        prefix="subtab"
        items={[<FaceMask key="facemask" />, <Hat key="hat" />]}
      />
    </Root>
  );
};
