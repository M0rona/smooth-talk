import { ReactNode } from "react";

interface EmphasisProps {
  children: ReactNode;
}

export const Emphasis = ({ children }: EmphasisProps) => {
  return <strong className="font-bold text-pool-water">{children}</strong>;
};
