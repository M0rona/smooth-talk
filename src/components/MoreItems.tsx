import { motion } from "framer-motion";
import { ReactNode, createRef, Dispatch, SetStateAction } from "react";
import { useOutsideClick } from "@/hooks/useOutsideClick";

interface MoreItemsProps {
  children: ReactNode;
  setClose: Dispatch<SetStateAction<boolean>>;
}

export const MoreItems = ({ children, setClose }: MoreItemsProps) => {
  const moreItemsRef = createRef<HTMLDivElement>();

  useOutsideClick(moreItemsRef, () => {
    setClose((currentValue: boolean) => !currentValue);
  });

  return (
    <motion.div
      className="absolute -bottom-28 left-0 flex gap-2 rounded bg-coarse-wool p-3"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
      ref={moreItemsRef}
    >
      {children}
    </motion.div>
  );
};
