import { Root, List } from "@radix-ui/react-tabs";
import { TabProvider } from "../../../TabProvider";
import { ContentProvider } from "../../../ContentProvider";
import { Accessory } from "./Accessory";
import { Body } from "./Body";
import { SkinTone } from "./SkinTone";
import { Clothing } from "./Clothing";
import { Face } from "./Face";
import { Hair } from "./Hair";

export const Tabs = () => {
  return (
    <Root defaultValue="tab-1" orientation="vertical" className="flex h-full">
      <List className="flex flex-col justify-center">
        <TabProvider
          prefix="tab"
          items={[
            "Acessório",
            "Corpo",
            "Tom de pele",
            "Roupa",
            "Rosto",
            "Cabelo",
            "Fundo",
          ]}
          className="w-full"
        />
      </List>

      <ContentProvider
        prefix="tab"
        items={[
          <Accessory key="accessory" />,
          <Body key="body" />,
          <SkinTone key="skintone" />,
          <Clothing key="clothing" />,
          <Face key="face" />,
          <Hair key="hair" />,
        ]}
      />
    </Root>
  );
};
