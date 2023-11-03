import { CharacterSection } from "./CharacterSection";
import * as Tabs from "@radix-ui/react-tabs";
import { TabItem } from "./TabItem";

export const ModalContent = () => {
  return (
    <>
      <div className="flex gap-10">
        <section className="flex flex-col items-center justify-center gap-5">
          <CharacterSection />
        </section>

        <section className="flex-1">
          <Tabs.Root>
            <Tabs.List>
              <Tabs.Trigger value="tab1" asChild>
                <TabItem text="Acessórios" />
              </Tabs.Trigger>

              <Tabs.Trigger value="tab2" asChild>
                <TabItem text="Corpo" />
              </Tabs.Trigger>

              <Tabs.Trigger value="tab3" asChild>
                <TabItem text="Tom de pele" />
              </Tabs.Trigger>

              <Tabs.Trigger value="tab4" asChild>
                <TabItem text="Roupa" />
              </Tabs.Trigger>

              <Tabs.Trigger value="tab5" asChild>
                <TabItem text="Rosto" />
              </Tabs.Trigger>

              <Tabs.Trigger value="tab6" asChild>
                <TabItem text="Cabelo" />
              </Tabs.Trigger>
            </Tabs.List>
          </Tabs.Root>
        </section>
      </div>
    </>
  );
};
