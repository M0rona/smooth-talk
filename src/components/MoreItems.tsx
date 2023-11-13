import { motion } from "framer-motion";
import { ReactNode } from "react";

interface MoreItemsProps {
  children: ReactNode;
}

export const MoreItems = ({ children }: MoreItemsProps) => {
  return (
    <motion.div
      className="absolute -bottom-28 left-0 flex gap-2 rounded bg-coarse-wool p-3"
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.96 }}
    >
      {children}
    </motion.div>
  );
};
