import { Potion } from './Potion';
import ElixirInterface from '../interfaces/Elixir';
import ModifiersInterface from '../interfaces/Modifiers';

export class Elixir extends Potion implements ElixirInterface {
    duration: number;

    constructor(name: string, duration: number, modifiers: ModifiersInterface) {
        super(name, 'elixir', modifiers);
        this.duration = duration;
    }

    static create(ingredients: { effects: string[] }[]): Elixir | null {
        if (ingredients.length < 2 || ingredients.length > 4) {
            console.log("Invalid number of ingredients:", ingredients.length);
            return null;
        }

        let effect: string[] = [];
        let weakestPrefix: string = 'greater';
        let getDuration: number = 0;
        const modifiers = {
            hit_points: 0,
            intelligence: 0,
            dexterity: 0,
            insanity: 0,
            charisma: 0,
            constitution: 0,
            strength: 0,
        };

        const prefixValues: number[] = ingredients.map(ingredient => {
            const effectWords: string[] = ingredient.effects[0].split('_');
            console.log("Effect words breakdown:", effectWords);

            let prefixValue = 0;
            let prefix = '';

            if (effectWords.length === 3) {
                prefix = effectWords[0];
            } else if (effectWords.length === 2) {
                prefix = ''; 
            } else if (effectWords.length === 1) {
                prefix = ''; 
            }

            console.log("Extracted Prefix:", prefix);

            switch (prefix) {
                case 'least':
                    prefixValue = 5;
                    getDuration = 1;
                    break;
                case 'lesser':
                    prefixValue = 10;
                    getDuration = 1;
                    break;
                case '':
                    prefixValue = 15;
                    getDuration = 2;
                    break;
                case 'greater':
                    prefixValue = 20;
                    getDuration = 3;
                    break;
            }

            const effectType = effectWords.length === 3 ? effectWords[1] : effectWords[0]
            const affectedAttribute = effectWords.length === 3 ? effectWords[2] : effectWords[1];

            console.log("Prefix:", prefix, "Type:", effectType, "Attribute:", affectedAttribute);
            effect = effectWords;
            return prefixValue;
        });

        console.log("Prefix values:", prefixValues);
        let totalValue = 0
        let totalDuration = 0
        for (let i = 0; i < prefixValues.length; i++) {
            const value = prefixValues[i];
            totalValue += value
            totalDuration += value === 5  ? 1 :
                             value === 10 ? 1 :
                             value === 15 ? 2 :
                             3
        }
        totalValue = totalValue / prefixValues.length
        totalDuration = Math.floor(totalDuration / prefixValues.length)
        console.log(totalDuration);
        getDuration = totalDuration
        totalValue = Math.floor(totalValue/5) *5
        if (totalValue < 5) totalValue = 5
        const weakestValue = totalValue
        console.log("Weakest value:", weakestValue);

        switch (weakestValue) {
            case 5:
                weakestPrefix = 'least';
                break;
            case 10:
                weakestPrefix = 'lesser';
                break;
            case 15:
                weakestPrefix = '';
                break;
            case 20:
                weakestPrefix = 'greater';
                break;
        }

        console.log("Weakest prefix determined:", weakestPrefix);

        const effectType: string = effect.length === 3 ? effect[1] : effect[0];
        const affectedAttribute: string = effect.length === 3 ? effect[2] : effect[1];
        console.log(effectType, affectedAttribute)
        const capitalizedAttribute: string = affectedAttribute 
            ? affectedAttribute.charAt(0).toUpperCase() + affectedAttribute.slice(1) 
            : '';
        
        if (affectedAttribute === 'calm') {
            modifiers.insanity -= weakestValue; 
        }else{
            if (effectType === 'boost' && affectedAttribute) {
                modifiers[affectedAttribute] += weakestValue; 
            }
        }

        const potionName: string = 
            effectType === 'boost' && affectedAttribute
                ? `${weakestPrefix} ${capitalizedAttribute} Elixir` 
                : `${weakestPrefix} Calm Elixir`;
        console.log(modifiers);
        
        console.log("Final potion name:", potionName);

        return new Elixir(potionName, getDuration, modifiers);
    }

    calculateModifier(ingredientValues) {
        const totalValue = ingredientValues.reduce((sum, value) => sum + value, 0);
        const averageValue = totalValue / ingredientValues.length;
        return Math.floor(averageValue / 5) * 5;
    }
}
