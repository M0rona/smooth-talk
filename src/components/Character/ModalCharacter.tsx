import { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";

interface ModalCharacterProps {
  children: ReactNode;
}

export const ModalCharacter = ({ children }: ModalCharacterProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-fadeIn data-[state=closed]:animate-fadeOut fixed inset-0 bg-black/40" />
        <Dialog.Content className="data-[state=open]:animate-contentShow data-[state=closed]:animate-contentHide fixed left-[50%] top-[50%] max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%]">
          <h1>Hello world!</h1>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
