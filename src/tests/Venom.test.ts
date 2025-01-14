import { PotionFactory } from "../PotionFactory";
import { DISEASES, INGREDIENTS } from "./mocks";

//Cuando el numero de ingredientes es de 2-4
describe('Cuando todos los ingredientes llevan el efecto "SetBack".', () => {
  //Cuando todos los ingredientes tienen el mismo atributo
    //Cuando todos los ingredientes son de tipo Least
        it('El valor resultante del atributo será la media de los values de los ingredientes redondeada al multiple de 5 inferior.', () => {
            const mockIngredients = [ INGREDIENTS[90], INGREDIENTS[90]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
            expect(potion.modifiers.dexterity).toBe(-5);
        });
        it('La duración será la media  de duraciones redondeada hacia abajo', () => {
            const mockIngredients = [ INGREDIENTS[90], INGREDIENTS[90]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
            expect(potion.duration).toBe(1);
        });

    //Cuando todos los ingredientes son de tipo Lesser
        it('El valor resultante del atributo será la media de los values de los ingredientes redondeada al multiple de 5 inferior.', () => {
            const mockIngredients = [ INGREDIENTS[84], INGREDIENTS[84]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
            expect(potion.modifiers.intelligence).toBe(-10);
        });
        it('La duración será la media  de duraciones redondeada hacia abajo', () => {
            const mockIngredients = [ INGREDIENTS[84], INGREDIENTS[84]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
            expect(potion.duration).toBe(1);
        });

    //Cuando todos los ingredientes son de tipo Normal
        it('El valor resultante del atributo será la media de los values de los ingredientes redondeada al multiple de 5 inferior.', () => {
            const mockIngredients = [ INGREDIENTS[86], INGREDIENTS[86]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
            
            expect(potion.modifiers.dexterity).toBe(-15);
        });
        it('La duración será la media  de duraciones redondeada hacia abajo', () => {
            const mockIngredients = [ INGREDIENTS[86], INGREDIENTS[86]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)

            expect(potion.duration).toBe(2);
        });

    //Cuando todos los ingredientes son de tipo Greater
        it('El valor resultante del atributo será la media de los values de los ingredientes redondeada al multiple de 5 inferior.', () => {
            const mockIngredients = [ INGREDIENTS[85], INGREDIENTS[85]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
            
            expect(potion.modifiers.charisma).toBe(-20);
        });
        it('La duración será la media  de duraciones redondeada hacia abajo', () => {
            const mockIngredients = [ INGREDIENTS[85], INGREDIENTS[85]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)

            expect(potion.duration).toBe(3);
        });

    //Cuando todos los ingredientes son de tipo diferente
        it('El valor resultante del atributo será la media de los values de los ingredientes redondeada al multiple de 5 inferior.', () => {
            const mockIngredients = [ INGREDIENTS[93], INGREDIENTS[85]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
            
            console.log(potion);
            
            expect(potion.modifiers.charisma).toBe(-15);
        });
        it('La duración será la media  de duraciones redondeada hacia abajo', () => {
            const mockIngredients = [ INGREDIENTS[93], INGREDIENTS[85]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)

             expect(potion.duration).toBe(2);
        });
        it('El nombre de la pocion será: Modifier + Attribute + Venom', () => {
            const mockIngredients = [ INGREDIENTS[93], INGREDIENTS[85]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)

             expect(potion.name).toBe(' Charisma Venom');
        });
  });

describe('Cuando nno todos los ingredientes llevan el efecto "SetBack".', () => {
    it('El nombre de la pocion no contendrá: Venom', () => {
        const mockIngredients = [ INGREDIENTS[95], INGREDIENTS[81]];
        const potion = PotionFactory.createPotion(mockIngredients, DISEASES)

         expect(potion.name).not.toContain('Venom');
    });
  })

describe('Cuando todos los ingredientes llevan el efecto "Frenzy".', () => {
    //Cuando todos los ingredientes tienen el atributo Insanity
        it('El valor resultante del atributo será la media de los values de los ingredientes redondeada al multiple de 5 inferior.', () => {
            const mockIngredients = [ INGREDIENTS[104], INGREDIENTS[104]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
            console.log(potion);
            
            expect(potion.modifiers.insanity).toBe(5);
        });

        it('La duración será la media  de duraciones redondeada hacia abajo', () => {
            const mockIngredients = [ INGREDIENTS[104], INGREDIENTS[104]];
            const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
            expect(potion.duration).toBe(1);
        });
  });

describe('Cuando no todos los ingredientes llevan el efecto "Frenzy".', () => {
    it('El nombre de la pocion no contendrá: Frenzy ni SetBack', () => {
        const mockIngredients = [ INGREDIENTS[104], INGREDIENTS[54]];
        const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
        expect(potion.name).not.toContain('Frenzy');
        expect(potion.name).not.toContain('SetBack');
    })
  });

describe('Cuando el numero de ingredientes es menor que 2.', () => {
    it('El nombre de la pocion no contendrá: Venom', () => {
        const mockIngredients = [ INGREDIENTS[104]];
        const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
        expect(potion.name).not.toContain('Venom');
    })
  });
describe('Cuando el numero de ingredientes es mayor que 4.', () => {
    it('El nombre de la pocion no contendrá: Venom', () => {
        const mockIngredients = [ INGREDIENTS[104], INGREDIENTS[104], INGREDIENTS[104], INGREDIENTS[104], INGREDIENTS[104]];
        const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
        expect(potion.name).not.toContain('Venom');
    })
  });
