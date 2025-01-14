import { PotionFactory } from "../PotionFactory";
import { DISEASES, INGREDIENTS } from "./mocks";
describe('Cuando no todos los ingredientes no contine increase', () => {
    it('El nombre de la Pocion no contendrá la palabra "Stench"', () => {
        const mockIngredients = [ INGREDIENTS[1], INGREDIENTS[52], INGREDIENTS[98] ];
        const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
        console.log(potion);
        
        expect(potion.name).toBe('Tonic of DownFall');
    })
})