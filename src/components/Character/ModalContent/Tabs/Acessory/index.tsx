import { forwardRef, Ref } from "react";

interface AcessoryProps {}

export const Acessory = forwardRef(
  ({}: AcessoryProps, ref: Ref<HTMLDivElement>) => {
    return <div ref={ref}>{/* Conteúdo do componente */}</div>;
  },
);

Acessory.displayName = "Acessory";
