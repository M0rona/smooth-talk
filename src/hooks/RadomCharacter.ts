import { AvatarProps } from "@bigheads/core";

export const RamdomCharacter = (
  setBigHeadProps: (bigHeadProps: AvatarProps) => void
) => {
    const characteristics = {
        accessory: ['none', 'roundGlasses', 'tinyGlasses', 'shades'],
        body: ['chest', 'breasts'],
        clothing: ['naked', 'shirt', 'dressShirt', 'vneck', 'tankTop'],
        clothingColor: ['white', 'blue', 'black', 'green', 'red'],
        eyebrows: ['raised', 'leftLowered', 'serious', 'angry', 'concerned'],
        eyes: ['normal', 'leftTwitch', 'happy', 'content', 'squint', 'simple', 'dizzy', 'wink', 'heart'],
        faceMask: [true, false],
        faceMaskColor: ['white', 'blue', 'black', 'green', 'red'],
        facialHair: ['none', 'none2', 'none3', 'stubble', 'mediumBeard'],
        graphic: ['none', 'redwood', 'gatsby', 'vue', 'react', 'graphQL'],
        hair: ['none', 'long', 'bun', 'short', 'pixie', 'balding', 'buzz', 'afro', 'bob'],
        hairColor: ['blonde', 'orange', 'black', 'white', 'brown', 'blue', 'pink'],
        hat: ['none', 'none2', 'none3', 'none4', 'none5', 'beanie', 'turban'],
        hatColor: ['white', 'blue', 'black', 'green', 'red'],
        lashes:[true, false],
        lipColor: ['red', 'purple', 'pink', 'turqoise', 'green'],
        mouth: ['grin', 'sad', 'openSmile', 'lips', 'open', 'serious', 'tongue'],
        skinTone: ['light', 'yellow', 'brown', 'dark', 'red', 'black']
    }

    type CharacteristicKey = keyof typeof characteristics;

    const randomCharacter: Record<CharacteristicKey, string | boolean> = {} as any;

    for (const key in characteristics) {
        const values = characteristics[key as CharacteristicKey];
        const randomValue = values[Math.floor(Math.random() * values.length)];
        randomCharacter[key as CharacteristicKey] = randomValue;
    }
    
    setBigHeadProps(randomCharacter as AvatarProps);
};
