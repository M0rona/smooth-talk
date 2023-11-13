import { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface MoreItemsProps {
  children: ReactNode;
}

export const MoreItems = ({ children }: MoreItemsProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Content className="absolute rounded-xl bg-hei-se-black p-8 focus:outline-none data-[state=closed]:animate-contentHide data-[state=open]:animate-contentShow"></Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
