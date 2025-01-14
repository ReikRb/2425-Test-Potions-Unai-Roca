import EffectsInterface from "./Effects";
import ModifiersInterface from "./Modifiers";

export default interface DiseaseInterface {

    _id: string;
    name: string;
    description: string;
    type: string;
    antidote_effects: EffectsInterface[];
    poison_effects: EffectsInterface[];
    modifiers: ModifiersInterface;
}