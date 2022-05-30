import { battleAxe, battleKnife, longsword, stick } from "./weapons.js"

const desgraciado = {
    hp: 400 + 10*2,
    vitalidad: 10,
    strength: 10,
    defense: 10,
    nombre: "desgraciado",
    level: 1,
    experience: 0,
    weapon: stick
}

const berserker = {
    hp: 400 + 14*2,
    vitalidad: 14,
    strength: 11,
    defense: 15,
    nombre: "berserker",
    level: 1,
    experience: 0,
    weapon: battleAxe
}

const asesino = {
    hp: 400 + 10*2,
    vitalidad: 10,
    strength: 21,
    defense: 9,
    nombre: "asesino",
    level: 1,
    experience: 0,
    weapon: battleKnife
}

const guerrero = {
    hp: 400 + 15*2,
    vitalidad: 15,
    strength: 14,
    defense: 11,
    nombre: "guerrero",
    level: 1,
    experience: 0,
    weapon: longsword
}
export {desgraciado, berserker, asesino, guerrero};