import { CharacterSection } from "./CharacterSection";
import * as Tabs from "@radix-ui/react-tabs";
import { TabProvider } from "./Tabs/TabProvider";
// import { Acessory } from "./Tabs/Acessory";

export const ModalContent = () => {
  return (
    <>
      <div className="flex gap-10">
        <section className="flex flex-col items-center justify-center gap-5">
          <CharacterSection />
        </section>

        <section className="flex-1">
          <Tabs.Root defaultValue="tab1">
            <Tabs.List>
              <TabProvider
                items={[
                  "Acessórios",
                  "Corpo",
                  "Tom de pele",
                  "Roupa",
                  "Rosto",
                  "Cabelo",
                  "Fundo",
                ]}
              />
            </Tabs.List>

            <Tabs.Content value="tab1" asChild>
              {/* <Acessory /> */}
              <h1>Teste</h1>
            </Tabs.Content>
          </Tabs.Root>
        </section>
      </div>
    </>
  );
};
