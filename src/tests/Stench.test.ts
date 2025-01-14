import { PotionFactory } from "../PotionFactory";
import { DISEASES, INGREDIENTS } from "./mocks";

describe('Cuando todos los ingredientes llevan el efecto "Decrease".', () => {
    //Cuando tienen el mismo tipo
        //Cuando tienen 2 ingredientes
            it('El valor resultante del atributo será la suma de values de los ingredientes mas un 20%', () => {
                const mockIngredients = [ INGREDIENTS[4], INGREDIENTS[4],];
                const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
                console.log(potion);
                
                expect(potion.modifiers.hit_points).toBe(-10*1.2);
            })
        //Cuando tienen 3 ingredientes
            it('El valor resultante del atributo será la suma de values de los ingredientes mas un 40%', () => {
                const mockIngredients = [ INGREDIENTS[4], INGREDIENTS[4],INGREDIENTS[4]];
                const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
                console.log(potion);
                
                expect(potion.modifiers.hit_points).toBe(Math.ceil(-15*1.4));
            })
        //Cuando tienen 4 ingredientes
            it('El valor resultante del atributo será la suma de values de los ingredientes mas un 80%', () => {
                const mockIngredients = [ INGREDIENTS[4], INGREDIENTS[4],INGREDIENTS[4], INGREDIENTS[4]];
                const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
                console.log(potion);
                
                expect(potion.modifiers.hit_points).toBe(Math.ceil(-20*1.8));
            })
  });

  describe('Cuando el numero de ingredientes es menor que 2.', () => {
    it('El nombre de la pocion no contendrá: Stench', () => {
        const mockIngredients = [ INGREDIENTS[4]];
        const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
        expect(potion.name).not.toContain('Stench');
    })
  });
describe('Cuando el numero de ingredientes es mayor que 4.', () => {
    it('El nombre de la pocion no contendrá: Stench', () => {
        const mockIngredients = [ INGREDIENTS[4], INGREDIENTS[4], INGREDIENTS[4], INGREDIENTS[4], INGREDIENTS[4]];
        const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
        expect(potion.name).not.toContain('Stench');
    })
  });
  
describe(' nombre de pocion', () => {
    it('El Nombre de la pocion resultante será: Stench + modifier + heal', () => {
        const mockIngredients = [ INGREDIENTS[4], INGREDIENTS[4],INGREDIENTS[4], INGREDIENTS[4]];
        const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
        console.log(potion);
        
        expect(potion.name).toBe('Stench of least Damage');
    })
})

describe('diferentes valores de tipo', () => {
    it('El valor resultante del atributo será la suma de values de los ingredientes', () => {
        const mockIngredients = [ INGREDIENTS[4], INGREDIENTS[5]];
        const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
        console.log(potion);
        
        expect(potion.modifiers.hit_points).toBe(-25);
    })
})
describe('Cuando no todos los ingredientes no contine increase', () => {
    it('El nombre de la Pocion no contendrá la palabra "Stench"', () => {
        const mockIngredients = [ INGREDIENTS[4], INGREDIENTS[1]];
        const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
        console.log(potion);
        
        expect(potion.name).not.toContain('Stench');
    })
})