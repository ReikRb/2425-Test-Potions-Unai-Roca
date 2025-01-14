import { PotionFactory } from "../PotionFactory";
import { DISEASES, INGREDIENTS } from "./mocks";

describe('Cuando todos los ingredientes llevan el efecto "Increase".', () => {
    //Cuando tienen el mismo tipo
        //Cuando tienen 2 ingredientes
            it('El valor resultante del atributo será la suma de values de los ingredientes mas un 20%', () => {
                const mockIngredients = [ INGREDIENTS[0], INGREDIENTS[0],];
                const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
                console.log(potion);
                
                expect(potion.modifiers.hit_points).toBe(30*1.2);
            })
        //Cuando tienen 3 ingredientes
            it('El valor resultante del atributo será la suma de values de los ingredientes mas un 40%', () => {
                const mockIngredients = [ INGREDIENTS[0], INGREDIENTS[0],INGREDIENTS[0]];
                const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
                console.log(potion);
                
                expect(potion.modifiers.hit_points).toBe(Math.ceil(45*1.4));
            })
        //Cuando tienen 4 ingredientes
            it('El valor resultante del atributo será la suma de values de los ingredientes mas un 80%', () => {
                const mockIngredients = [ INGREDIENTS[0], INGREDIENTS[0],INGREDIENTS[0], INGREDIENTS[0]];
                const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
                console.log(potion);
                
                expect(potion.modifiers.hit_points).toBe(Math.ceil(60*1.8));
            })
  });

  describe('Cuando el numero de ingredientes es menor que 2.', () => {
    it('El nombre de la pocion no contendrá: Essence', () => {
        const mockIngredients = [ INGREDIENTS[0]];
        const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
        expect(potion.name).not.toContain('Essence');
    })
  });
describe('Cuando el numero de ingredientes es mayor que 4.', () => {
    it('El nombre de la pocion no contendrá: Essence', () => {
        const mockIngredients = [ INGREDIENTS[0], INGREDIENTS[0], INGREDIENTS[0], INGREDIENTS[0], INGREDIENTS[0]];
        const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
        expect(potion.name).not.toContain('Essence');
    })
  });
  
describe(' nombre de pocion', () => {
    it('El Nombre de la pocion resultante será: Essence + modifier + heal', () => {
        const mockIngredients = [ INGREDIENTS[0], INGREDIENTS[0],INGREDIENTS[0], INGREDIENTS[0]];
        const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
        console.log(potion);
        
        expect(potion.name).toBe('Essence of greater heal');
    })
})

describe('diferentes valores de tipo', () => {
    it('El valor resultante del atributo será la suma de values de los ingredientes', () => {
        const mockIngredients = [ INGREDIENTS[0], INGREDIENTS[1]];
        const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
        console.log(potion);
        
        expect(potion.modifiers.hit_points).toBe(Math.ceil(25));
    })
})
describe('Cuando no todos los ingredientes no contine increase', () => {
    it('El nombre de la Pocion no contendrá la palabra "Essence"', () => {
        const mockIngredients = [ INGREDIENTS[0], INGREDIENTS[1]];
        const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
        console.log(potion);
        
        expect(potion.name).toContain('Essence');
    })
})