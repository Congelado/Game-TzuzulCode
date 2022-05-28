import attack from "../functions/attack.js";
import { desgraciado } from "./characters.js";
import { club } from "./weapons.js"

const minotaur = {
    hp: 100,
    strength: 10,
    defense: 10,
    name: 'minotaur', 
    level: 1,
    experience: 100,
    weapon: club
}
console.log(minotaur.weapon.ataque)
console.log(attack(minotaur, desgraciado));