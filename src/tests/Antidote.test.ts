import { PotionFactory } from "../PotionFactory";
import { DISEASES, INGREDIENTS } from "./mocks";

describe('Cuando todos los ingredientes llevan el efecto "Restore".', () => {
  const mockIngredients = [ INGREDIENTS[20], INGREDIENTS[14]];
  const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
    it('El nombre deberá ser el correspondiente. Antidote of + "nombre enfermedad".', () => {
      expect(potion.name).toBe("Antidote of Gravechill");
    });
    it('Los atributos tendran el valor dentro del rango de valores', () => {
      expect(potion.modifiers.constitution).toBeGreaterThanOrEqual(6)
      expect(potion.modifiers.constitution).toBeLessThanOrEqual(9)

      expect(potion.modifiers.hit_points).toBeGreaterThanOrEqual(40)
      expect(potion.modifiers.hit_points).toBeLessThanOrEqual(50)
    });
  });
  
  describe('Si alguno de los ingredientes no tiene el nombre "Restore".', () => {
    const mockIngredients = [ INGREDIENTS[20], INGREDIENTS[0]];
    const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
      it('El nombre no llevará la palabra "Antidote".', () => {
        expect(potion.name).not.toContain("Antidote");
      });
    });