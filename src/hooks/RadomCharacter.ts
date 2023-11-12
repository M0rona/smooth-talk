import { AvatarProps } from "@/BigHeads";
import { Characteristics } from "./Characteristics";

export const RamdomCharacter = (
  setBigHeadProps: (bigHeadProps: AvatarProps) => void
) => {
    type CharacteristicKey = keyof typeof Characteristics;

    const randomCharacter: Record<CharacteristicKey, string | boolean> = {} as any;

    for (const key in Characteristics) {
        const values = Characteristics[key as CharacteristicKey];
        const randomValue = values[Math.floor(Math.random() * values.length)];
        randomCharacter[key as CharacteristicKey] = randomValue;
    }
    
    setBigHeadProps(randomCharacter as AvatarProps);
};
