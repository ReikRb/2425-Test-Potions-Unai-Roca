import { PotionFactory } from "../PotionFactory";
import { DISEASES, INGREDIENTS } from "./mocks";

//Cuando el numero de ingredientes es de 2-4
describe('Cuando todos los ingredientes llevan el efecto "Boost".', () => {
  //Cuando todos los ingredientes tienen el mismo atributo
    //Cuando todos los ingredientes son de tipo Least
        it('El valor resultante del atributo será la media de los values de los ingredientes redondeada al multiple de 5 inferior.', () => {
            const mockIngredients = [ INGREDIENTS[83], INGREDIENTS[83]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
            expect(potion.modifiers.charisma).toBe(5);
        });
        it('La duración será la media  de duraciones redondeada hacia abajo', () => {
            const mockIngredients = [ INGREDIENTS[83], INGREDIENTS[83]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
            expect(potion.duration).toBe(1);
        });

    //Cuando todos los ingredientes son de tipo Lesser
        it('El valor resultante del atributo será la media de los values de los ingredientes redondeada al multiple de 5 inferior.', () => {
            const mockIngredients = [ INGREDIENTS[66], INGREDIENTS[66]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
            expect(potion.modifiers.dexterity).toBe(10);
        });
        it('La duración será la media  de duraciones redondeada hacia abajo', () => {
            const mockIngredients = [ INGREDIENTS[66], INGREDIENTS[66]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
            expect(potion.duration).toBe(1);
        });

    //Cuando todos los ingredientes son de tipo Normal
        it('El valor resultante del atributo será la media de los values de los ingredientes redondeada al multiple de 5 inferior.', () => {
            const mockIngredients = [ INGREDIENTS[64], INGREDIENTS[64]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
            
            expect(potion.modifiers.constitution).toBe(15);
        });
        it('La duración será la media  de duraciones redondeada hacia abajo', () => {
            const mockIngredients = [ INGREDIENTS[64], INGREDIENTS[64]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)

            expect(potion.duration).toBe(2);
        });

    //Cuando todos los ingredientes son de tipo Greater
        it('El valor resultante del atributo será la media de los values de los ingredientes redondeada al multiple de 5 inferior.', () => {
            const mockIngredients = [ INGREDIENTS[70], INGREDIENTS[70]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
            
            expect(potion.modifiers.dexterity).toBe(20);
        });
        it('La duración será la media  de duraciones redondeada hacia abajo', () => {
            const mockIngredients = [ INGREDIENTS[70], INGREDIENTS[70]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)

            expect(potion.duration).toBe(3);
        });
    //Cuando todos los ingredientes son de tipo diferente
        it('El valor resultante del atributo será la media de los values de los ingredientes redondeada al multiple de 5 inferior.', () => {
            const mockIngredients = [ INGREDIENTS[70], INGREDIENTS[66]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
            
            console.log(potion);
            
            expect(potion.modifiers.dexterity).toBe(15);
        });
        it('La duración será la media  de duraciones redondeada hacia abajo', () => {
            const mockIngredients = [ INGREDIENTS[70], INGREDIENTS[66]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)

             expect(potion.duration).toBe(2);
        });
        it('El nombre de la pocion será: Modifier + Attribute + Elixir', () => {
            const mockIngredients = [ INGREDIENTS[70], INGREDIENTS[66]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)

             expect(potion.name).toBe(' Dexterity Elixir');
        });
  });

describe('Cuando nno todos los ingredientes llevan el efecto "Boost".', () => {
    it('El nombre de la pocion no contendrá: Elixir', () => {
        const mockIngredients = [ INGREDIENTS[70], INGREDIENTS[81]];
        const potion = PotionFactory.createPotion(mockIngredients, DISEASES)

         expect(potion.name).not.toContain('Elixir');
    });
  })

describe('Cuando todos los ingredientes llevan el efecto "Calm".', () => {
    //Cuando todos los ingredientes tienen el atributo Insanity
        it('El valor resultante del atributo será la media de los values de los ingredientes redondeada al multiple de 5 inferior.', () => {
            const mockIngredients = [ INGREDIENTS[111], INGREDIENTS[111]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
            console.log(potion);
            
            expect(potion.modifiers.insanity).toBe(-15);
        });
        it('La duración será la media  de duraciones redondeada hacia abajo', () => {
            const mockIngredients = [ INGREDIENTS[111], INGREDIENTS[111]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
            expect(potion.duration).toBe(2);
        });
  });

describe('Cuando no todos los ingredientes llevan el efecto "Calm".', () => {
    it('El nombre de la pocion no contendrá: Calm ni Boost', () => {
        const mockIngredients = [ INGREDIENTS[111], INGREDIENTS[54]];
        const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
        expect(potion.name).not.toContain('Calm');
        expect(potion.name).not.toContain('Boost');
    })

  });

describe('Cuando el numero de ingredientes es menor que 2.', () => {
    it('El nombre de la pocion no contendrá: Elixir', () => {
        const mockIngredients = [ INGREDIENTS[111]];
        const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
        expect(potion.name).not.toContain('Elixir');
    })
  });
describe('Cuando el numero de ingredientes es mayor que 4.', () => {
    it('El nombre de la pocion no contendrá: Elixir', () => {
        const mockIngredients = [ INGREDIENTS[111], INGREDIENTS[111], INGREDIENTS[111], INGREDIENTS[111], INGREDIENTS[111]];
        const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
        expect(potion.name).not.toContain('Elixir');
    })
  });
