import EffectsInterface from "./Effects";

export default interface IngredientInterface {

    _id: string;
    name: string;
    description: string;
    value: number;
    effects: string[];
    type: string;
}