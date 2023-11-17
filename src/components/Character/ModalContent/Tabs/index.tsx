import { ContentProvider } from "../../../ContentProvider";
import { Accessory } from "./Accessory";
import { Body } from "./Body";
import { Clothing } from "./Clothing";
import { Face } from "./Face";
import { Hair } from "./Hair";

export const Tabs = () => {
  return (
    <ContentProvider
      prefix="tab"
      items={[
        <Accessory key="accessory" />,
        <Body key="body" />,
        <Clothing key="clothing" />,
        <Face key="face" />,
        <Hair key="hair" />,
      ]}
    />
  );
};
