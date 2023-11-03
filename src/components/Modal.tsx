import { ReactNode } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross1Icon } from "@radix-ui/react-icons";
import { Button } from "@/components/Button";

interface ModalProps {
  children: ReactNode;
  content: JSX.Element;
  w: string;
}

export const Modal = ({ children, content, w }: ModalProps) => {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>{children}</Dialog.Trigger>

      <Dialog.Portal>
        <Dialog.Overlay className="fixed inset-0 bg-black/50 data-[state=closed]:animate-fadeOut data-[state=open]:animate-fadeIn" />

        <Dialog.Content
          className={`fixed left-[50%] top-[50%] max-h-[85vh] ${w} z-20 translate-x-[-50%] translate-y-[-50%] rounded-xl bg-hei-se-black p-8 focus:outline-none data-[state=closed]:animate-contentHide data-[state=open]:animate-contentShow`}
        >
          {/* X icon */}
          <div className="mb-5 flex justify-end">
            <Dialog.Close className="focus:outline-none">
              <Cross1Icon />
            </Dialog.Close>
          </div>

          {/* Content */}
          <div className="h-full">{content}</div>

          <footer className="mt-4 flex justify-end gap-5">
            <Dialog.Close asChild>
              <Button text="Cancelar" secondary />
            </Dialog.Close>
            <Dialog.Close asChild>
              <Button text="Salvar" />
            </Dialog.Close>
          </footer>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};
