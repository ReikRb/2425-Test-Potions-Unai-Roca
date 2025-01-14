import ModifiersInterface from '../interfaces/Modifiers';
import { Potion } from './Potion';

export class DespairTonic extends Potion {
  constructor(name = '', type = '', modifiers:  ModifiersInterface = { 
    intelligence: 0, 
    dexterity: 0, 
    constitution: 0, 
    insanity: 0, 
    charisma: 0, 
    strength: 0 
  }) {
    super(name, type, modifiers);
  }

  static create(ingredients: any[]): DespairTonic {

    const totalModifier = Math.floor(
      ingredients.reduce((counter: number, ingredient: any) => counter + ingredient.value, 0) / ingredients.length / 5
    ) * 5;

    const modifier = { 
      intelligence: 0, 
      dexterity: 0, 
      constitution: 0, 
      insanity: 0, 
      charisma: 0, 
      strength: 0 
    };
    const potionName = 'Tonic of DownFall';

    return new DespairTonic(potionName,'despair',  modifier );
  }

  private static getModifier(totalModifier: number): string {
    if (totalModifier >= 20) return 'Greater';
    if (totalModifier >= 15) return '';
    if (totalModifier >= 10) return 'Lesser';
    return 'Least';
  }
}
