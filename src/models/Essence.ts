import { Potion } from './Potion';
import EssenceInterface from '../interfaces/Essence';
import ModifiersInterface from '../interfaces/Modifiers';

export class Essence extends Potion implements EssenceInterface {
    constructor(name: string, modifiers: ModifiersInterface) {
        super(name, 'essence', modifiers);
    }

    static create(ingredients: { effects: string[] }[]): Essence | null {
        if (ingredients.length < 2 || ingredients.length > 4) {
            console.log("Invalid number of ingredients:", ingredients.length);
            return null;
        }
        let effect: string[] = [];
        let totalValue = 0;
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
             if (effectWords.length < 3) effectWords.unshift('');
            
            let prefixValue = 0;
            let prefix = '';

            if (effectWords.length >=3 ) {
                prefix = effectWords[0];
            } else if (effectWords.length === 2) {
                prefix = effectWords[0]; 
            } else if (effectWords.length === 1) {
                prefix = ''; 
            }
            if (effectWords[0] === 'increase') {
                prefix = ''
            }
            console.log('EffectWords: ', prefix);
            
            switch (prefix) {
                case 'least':
                    prefixValue = 5;   
                    break;
                case 'lesser':
                    prefixValue = 10;  
                    break;
                case '':
                    prefixValue = 15;  
                    break;
                case 'greater':
                    prefixValue = 20;  
                    break;
            }

            console.log(prefixValue);
            
            if (effectWords[1] === 'increase' && effectWords.length > 1) {
                effect = effectWords; 
            }

            return prefixValue;
        });

        const isSameEffect = prefixValues.every((value, x, selectedIngredientArray) => value === selectedIngredientArray[0]);
        const numberOfIngredients = ingredients.length;

        if (isSameEffect) {
            totalValue = prefixValues.reduce((sum, value) => sum + value, 0);
            if (numberOfIngredients === 2) {
                totalValue = Math.ceil(totalValue * 1.2); // 20%
            } else if (numberOfIngredients === 3) {
                totalValue = Math.ceil(totalValue * 1.4); // 40%
            } else if (numberOfIngredients === 4) {
                totalValue = Math.ceil(totalValue * 1.8); // 80%
            }
        } else {
            totalValue = prefixValues.reduce((sum, value) => sum + value, 0);
        }

        modifiers.hit_points = totalValue; 
        console.log('modifiers: ', modifiers);
        
        let weakestPrefix: string = 'greater'; 

        const effectPrefixes: string[] = ingredients.map(ingredient => {
            const effectWords = ingredient.effects[0].split('_');
            return effectWords[0]; 
        });

        if (effectPrefixes.includes('least')) {
            weakestPrefix = 'least';
        } else if (effectPrefixes.includes('lesser')) {
            weakestPrefix = 'lesser';
        } else if (effectPrefixes.includes('')) {
            weakestPrefix = ''; 
        } else if (effectPrefixes.includes('greater')) {
            weakestPrefix = 'greater';
        }

        const potionName: string = `Essence of ${weakestPrefix} heal`; 

        console.log("Final potion name:", potionName);

        return new Essence(potionName, modifiers);
    }
}
