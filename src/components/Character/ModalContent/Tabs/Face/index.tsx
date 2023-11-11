import { Root, List } from "@radix-ui/react-tabs";
import { TabProvider } from "../../../../TabProvider";
import { ContentProvider } from "../../../../ContentProvider";
import { Eyebrows } from "./SubTabs/Eyebrows";
import { Eyes } from "./SubTabs/Eyes";
import { FacialHair } from "./SubTabs/FacialHair";
import { Lashes } from "./SubTabs/Lashes";
import { Mouth } from "./SubTabs/Mouth";

export const Face = () => {
  return (
    <Root defaultValue="subtab-1">
      <List className="flex justify-center gap-3">
        <TabProvider
          prefix="subtab"
          items={["Sombrancelha", "Olho", "Pêlo facial", "Cílio", "Boca"]}
          sub
        />
      </List>

      <ContentProvider
        prefix="subtab"
        items={[
          <Eyebrows key="eyebrows" />,
          <Eyes key="eyes" />,
          <FacialHair key="facialhair" />,
          <Lashes key="lashes" />,
          <Mouth key="mouth" />,
        ]}
      />
    </Root>
  );
};
