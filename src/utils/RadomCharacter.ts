import { AvatarProps } from "@/BigHeads";
import { characteristics } from "./characteristics";

export const ramdomCharacter = (
  setBigHeadProps: (bigHeadProps: AvatarProps) => void
) => {
    type CharacteristicKey = keyof typeof characteristics;

    const randomCharacter: Record<CharacteristicKey, string | boolean> = {} as any;

    for (const key in characteristics) {
        const values = characteristics[key as CharacteristicKey].name;
        const randomValue = values[Math.floor(Math.random() * values.length)];
        randomCharacter[key as CharacteristicKey] = randomValue;
    }
    
    setBigHeadProps(randomCharacter as AvatarProps);
};
