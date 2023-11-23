import { Dispatch, MouseEvent, SetStateAction } from "react";

export const onOpenMore = (e: MouseEvent<HTMLDivElement>, set: Dispatch<SetStateAction<boolean>>) => {
    if (!e.currentTarget.querySelector('div')?.contains(e.target as Node)) {
      set((currentValue) => !currentValue);
    }
};