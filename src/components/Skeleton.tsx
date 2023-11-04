import { forwardRef, Ref } from "react";
import { tv } from "tailwind-variants";

interface SkeletonProps {
  className: string;
}

const mergeClass = tv({
  base: "animate-pulse bg-white/20",
});

export const Skeleton = forwardRef(
  ({ className }: SkeletonProps, ref: Ref<HTMLDivElement>) => {
    return <div ref={ref} className={mergeClass({ className })} />;
  },
);

Skeleton.displayName = "Skeleton";
