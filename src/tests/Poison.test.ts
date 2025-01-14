import { Poison } from "../models/Poison";
import { PotionFactory } from "../PotionFactory";
import { DISEASES, INGREDIENTS } from "./mocks";

describe('Cuando todos los ingredientes llevan el efecto "Damage".', () => {
  const mockIngredients = [ INGREDIENTS[59], INGREDIENTS[45]];
  const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
    it('El nombre deberá ser el correspondiente. Poison of + "nombre enfermedad".', () => {
      expect(potion.name).toBe('Poison of Ethereal Consumption');
    });

    it('Los atributos tendran el valor de la enfermedad correspondiente', () => {
      expect(potion.modifiers.intelligence).toBe(-10)
      expect(potion.modifiers.insanity).toBe(6)
    });
  });
  
  describe('Si alguno de los ingredientes no tiene el nombre "Damage".', () => {
    const mockIngredients = [ INGREDIENTS[20], INGREDIENTS[4]];
    const potion = PotionFactory.createPotion(mockIngredients, DISEASES)
      it('El nombre no llevará la palabra "Poison".', () => {
        expect(potion.name).not.toContain("Poison");
      });
    });