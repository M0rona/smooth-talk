import { Root, List } from "@radix-ui/react-tabs";
import { CharacterSection } from "./CharacterSection";
import { Tabs } from "./Tabs";
import { TabProvider } from "@/components/TabProvider";

export const ModalContent = () => {
  return (
    <Root defaultValue="tab-1" orientation="vertical" className="flex gap-10">
      <section className="flex flex-col gap-5">
        <CharacterSection />

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
      </section>

      <section className="flex-1">
        <Tabs />
      </section>
    </Root>
  );
};
